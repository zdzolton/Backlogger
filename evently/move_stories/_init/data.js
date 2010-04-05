function() {
  $('.story_controls a[href=#move]').hide();
  
  var a = $(this);
  $$(a).moveToSprintNumber = null;
  var sprintNumber = $$('#sprint_filter').selectedSprintNumber;
  if (sprintNumber && sprintNumber != 'unassigned') {
    a.hide();
  } else {
    a.show();
  }
  return {};
}