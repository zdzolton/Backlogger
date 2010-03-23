function() {
  var sprintNumber = $(this).val();
  if (sprintNumber == 'unassigned') {
    window.location = "#/unassigned";
  } else {
    window.location = "#/sprint/" + sprintNumber;
  }
}
