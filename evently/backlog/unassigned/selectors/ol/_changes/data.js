function(resp) {
  var selectedSprintNumber = $$('#sprint_filter').selectedSprintNumber;
  var isAssignedSprint = selectedSprintNumber != "unassigned";
  var moveAction = isAssignedSprint ? 'backlog' : 'move';
  var moveToSprint = $$('#move_stories').moveToSprintNumber;
  var moveStyle = isAssignedSprint || moveToSprint ? '' : "display:none";
  return {
    rows: $.map(resp.rows, function(row) { 
      var doc = row.value;
      doc.move_action = moveAction;
      doc.move_style = moveStyle;
      return doc; 
    })
  };
}