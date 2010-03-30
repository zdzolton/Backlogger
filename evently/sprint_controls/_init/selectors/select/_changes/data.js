function(resp) {
  return {
    sprints: $.map(resp.rows, function(row) {
      var sprintNumber = row.key[0];
      var name = sprintNumber ? "Sprint #" + sprintNumber : "Unassigned";
      var value = sprintNumber || "unassigned";
      return { 
        name: name,  
        value: value, 
        isSelected: function() {
          var selectedSprintNumber = $$('#sprint_filter').selectedSprintNumber;
          $.log("Selected sprint number:");
          $.log(selectedSprintNumber);
          return selectedSprintNumber && selectedSprintNumber == String(sprintNumber);
        }
      };
    })
  };
}
