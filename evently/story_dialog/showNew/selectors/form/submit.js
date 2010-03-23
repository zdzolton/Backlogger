function(e) {
  var f = $(this);
  var app = $$(f).app;
  var doc = {
    type: "story",
    created_at: new Date(),
    name: $("input[name=name]", f).val(),
    complexity: $("select[name=complexity]", f).val(),
    business_value: $("select[name=business_value]", f).val(),
    acceptance_criteria: $("textarea[name=acceptance_criteria]", f).val(),
    notes: $("textarea[name=notes]", f).val()
  };
  $('#story_dialog').dialog('close');
  app.view('backlog-stories', {
    limit: 1,
    descending: true,
    success: function(res) {
      $.log('Got view result for priority:');
      $.log(res);
      var firstRow = res.rows[0];
      var lastPriority = firstRow ? firstRow.key : 1;
      doc.priority = lastPriority + 1;
      $.log('Saving document:');
      $.log(doc);
      app.db.saveDoc(doc);
    }
  });
  return false;
}
