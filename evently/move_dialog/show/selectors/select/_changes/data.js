function(resp) {
  return {
    sprints: $.map(resp.rows, function(row) {
      var sprintNumber = row.key[0];
      var name = "Sprint " + sprintNumber;
      return { name: name, value: sprintNumber };
    })
  };
}
