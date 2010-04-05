function(e, sprintNumber) {
  $('.story_controls a[href=#move]').show();
  
  var a = $(this);
  $$(a).moveToSprintNumber = sprintNumber;
  return { sprint_number: sprintNumber };
}