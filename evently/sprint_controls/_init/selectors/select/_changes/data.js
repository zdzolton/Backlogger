function(resp) {
  return {
    sprints: $.map(resp.rows, function(row) {
      var name = row.key ? "Sprint #" + row.key : "Unassigned";
      var value = row.key || "unassigned";
      return { name: name,  value: value };
    })
  };
}
