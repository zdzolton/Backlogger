function(resp) {
  var selectedSprintNumber = $$('#sprint_filter').selectedSprintNumber;
  var isAssignedSprint = selectedSprintNumber != "unassigned";
  return {
    rows: $.map(resp.rows, function(row) { 
      var doc = row.value;
      doc.is_assigned_sprint = isAssignedSprint;
      return doc; 
    })
  };
};