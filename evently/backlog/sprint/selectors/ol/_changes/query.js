function(e) {
  var params = e.data.args[1];
  var sprintNumber = $$('#sprint_filter').selectedSprintNumber = params.number;
  $.log('Building backlog query for Sprint #' + sprintNumber);
  return {
    view: "backlog-stories",
    reduce: false,
    descending: true,
    startkey: [sprintNumber, {}],
    endkey: [sprintNumber]
  };
}
