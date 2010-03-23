function(resp) {
  return {
    rows: $.map(resp.rows, function(row) { return row.value; })
  };
};