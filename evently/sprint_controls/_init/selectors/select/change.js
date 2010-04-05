function() {
  var sprintNumber = $(this).val();
  $$(this).selectedSprintNumber = sprintNumber;
  $.log('Changed selected sprint number:');
  $.log(sprintNumber);
  $('#move_stories').trigger('_init');
  if (sprintNumber == 'unassigned') {
    window.location = "#/unassigned";
  } else {
    window.location = "#/sprint/" + sprintNumber;
  }
}
