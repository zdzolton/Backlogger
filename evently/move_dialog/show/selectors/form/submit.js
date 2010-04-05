function() {
  
  function formatSprintNumber(year, number) {
    var sprintNumber;
    if (year != NaN && number != NaN) {
      // (^u^) cheap zero-pad!
      sprintNumber = (number < 10 ? '0' : '') + String(number); 
      sprintNumber = String(year) + '-' + sprintNumber;
    }
    return sprintNumber;
  }
  
  function triggerMoveMode(sprintNumber) {
    $('#move_dialog').dialog('close');
    $('#move_stories').trigger('beginMove', [sprintNumber])
  }
  
  var app = $$(this).app;
  var form = $(this);
  
  var selectedSprint = $('select[name=existing_sprints]', form).val();
  var enteredYear = parseInt($('input[name=sprint_year]', form).val());
  var enteredNumber = parseInt($('input[name=sprint_number]', form).val());
  if (selectedSprint) {
    $.log('Selected existing sprint:');
    $.log(selectedSprint);
    triggerMoveMode(selectedSprint);
  } else {
    var sprintNumber = formatSprintNumber(enteredYear, enteredNumber);
    $.log('Entered sprint number:');
    $.log(sprintNumber);
    if (sprintNumber) {
      triggerMoveMode(sprintNumber);
    } else {
      alert('You must either select an existing sprint, or enter both a new sprint year and number!');
    }
  }
  
  return false;
}
