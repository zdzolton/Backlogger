function() {
  var sprintNumber = $(this).val();
  $$(this).selectedSprintNumber = sprintNumber;
  $.log('Changed selected sprint number:');
  $.log(sprintNumber);
  if (sprintNumber == 'unassigned') {
    window.location = "#/unassigned";
  } else {
    window.location = "#/sprint/" + sprintNumber;
  }
}
