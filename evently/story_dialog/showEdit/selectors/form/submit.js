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
      $.extend(doc, {
        name: $("input[name=name]", f).val(),
        complexity: $("select[name=complexity]", f).val(),
        business_value: $("select[name=business_value]", f).val(),
        acceptance_criteria: $("textarea[name=acceptance_criteria]", f).val(),
        notes: $("textarea[name=notes]", f).val()
      });
      db.saveDoc(doc);        
      $.log(doc);
      $.log('Updated doc:');
    }
  });
  return false;
}
