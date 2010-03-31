function(e) {
  var f = $(this);
  $('#story_dialog').dialog('close');
  var id = $("input[name=_id]", f).val();
  $.log('Updating doc ID: ' + id);
  var app = $$(this).app;
  var db = app.db;
  db.openDoc(id, {
    success: function(doc) {
      $.log('Retrieved doc:');
      $.log(doc);
      
      $.log('Old sprint number:');
      var oldSprintNum = doc.sprint_number;
      $.log()
      
      $.extend(doc, {
        name: $("input[name=name]", f).val(),
        sprint_number: $("input[name=sprint_number]", f).val(),
        complexity: $("select[name=complexity]", f).val(),
        business_value: $("select[name=business_value]", f).val(),
        acceptance_criteria: $("textarea[name=acceptance_criteria]", f).val(),
        notes: $("textarea[name=notes]", f).val()
      });
      
      if (doc.sprint_number == oldSprintNum) {
        $.log('Updated doc:');
        $.log(doc);
        db.saveDoc(doc);        
      } else {
        $.log('Sprint number changed:');
        $.log(doc.sprint_number);
        
        // TODO: merge with code from showNew.selectors.form.submit
        app.view('backlog-stories', {
          limit: 1,
          descending: false,
          reduce: false,
          startkey: [doc.sprint_number],
          endkey: [doc.sprint_number, {}],
          success: function(res) {
            $.log('Got view result for priority:');
            $.log(res);
            var firstRow = res.rows[0];
            var lastPriority = firstRow ? firstRow.value.priority : 1;
            $.log('Last priority:');
            $.log(lastPriority);
            doc.priority = lastPriority + 1;
            $.log('Saving document:');
            $.log(doc);
            app.db.saveDoc(doc);
          }
        });
      }
    }
  });
  
  return false;
}
