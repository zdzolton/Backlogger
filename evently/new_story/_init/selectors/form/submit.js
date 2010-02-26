function(e) {
  var f = $(this);
  var doc = {
    type: "story",
    created_at: new Date(),
    name: $("input[name=name]", f).val(),
    complexity: $("select[name=complexity]", f).val(),
    business_value: $("select[name=business_value]", f).val(),
    acceptance_criteria: $("textarea[name=acceptance_criteria]", f).val(),
    notes: $("textarea[name=notes]", f).val(),
  };
  $$(f).app.db.saveDoc(
    doc,
    {
      success : function() {
        alert('added story to backlog');
        $(':text,textarea').val('');
        $('select').val(0);
      }
    }
  );
  return false;
}
