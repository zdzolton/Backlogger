function(e) {
  var f = $(this);
  var app = $$(f).app;
  var sprintNumber = $$('#sprint_filter').selectedSprintNumber || 'unassigned';
  $.log('Sprint number:');
  $.log(sprintNumber);
  var doc = {
    type: "story",
    created_at: new Date(),
    name: $("input[name=name]", f).val(),
    complexity: $("select[name=complexity]", f).val(),
    business_value: $("select[name=business_value]", f).val(),
    acceptance_criteria: $("textarea[name=acceptance_criteria]", f).val(),
    notes: $("textarea[name=notes]", f).val(),
    sprint_number: sprintNumber
  };
  $('#story_dialog').dialog('close');

  app.getHighestPriorityForSprint(sprintNumber, function(priority) {
    $.log('Last priority:');
    $.log(priority);
    doc.priority = priority + 1;
    $.log('Saving document:');
    $.log(doc);
    app.db.saveDoc(doc);
  });
  return false;
}
