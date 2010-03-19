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
  $('#new_story_dialog').dialog('close');
  $$(f).app.db.saveDoc(
    doc,
    {
      success: function() {
        alert('story added!');
        $(':text,textarea', f).val('');
        $('select', f).val(0);
      }
    }
  );
  return false;
}
