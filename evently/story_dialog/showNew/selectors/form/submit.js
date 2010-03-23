function(e) {
  var f = $(this);
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
  $$(f).app.view('backlog-stories', {
    limit: 1,
    descending: true,
    success: function(res) {
      var lastPriority = ((res.rows[0] || { priority: 0 }).priority || 1);
      doc.priority = lastPriority + 1;
      $$(f).app.db.saveDoc(doc);
    }
  });
  return false;
}
