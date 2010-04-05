// $.couch.app() loads the design document from the server and then calls our application.
$.couch.app(function(app) {
  $.log('Backlogger Start!');
  
  // helper functions:
  app.getLowestPriorityForBacklog = function(cb) {
    app.view('backlog-stories', {
      limit: 1,
      reduce: false,
      endkey: ['unassigned'],
      startkey: ['unassigned', {}],
      success: function(res) {
        $.log('Got view result for lowest Backlog priority:');
        $.log(res);
        var firstRow = res.rows[0];
        var firstPriority = firstRow ? firstRow.value.priority : 1;
        cb(firstPriority);
      }
    });
  };
  
  app.getHighestPriorityForSprint = function(sprintNumber, cb) {
    app.view('backlog-stories', {
      limit: 1,
      descending: false,
      reduce: false,
      startkey: [sprintNumber],
      endkey: [sprintNumber, {}],
      success: function(res) {
        $.log('Got view result for priority:');
        $.log(res);
        var firstRow = res.rows[0];
        var lastPriority = firstRow ? firstRow.value.priority : 1;
        cb(lastPriority);
      }
    });
  };
  
  $("#story_dialog").evently(app.ddoc.evently.story_dialog, app);
  $("#move_dialog").evently(app.ddoc.evently.move_dialog, app);
  $("#sprint_controls").evently(app.ddoc.evently.sprint_controls, app);
  $('#move_stories').evently(app.ddoc.evently.move_stories, app);
  
  // This hack allows the backlog's "sprint" event to share templates
  // and behaviors from the "unassigned" event:
  var backlog = app.ddoc.evently.backlog;
  backlog.sprint = $.extend(true, {}, backlog.unassigned, backlog.sprint);
  $.log(backlog)
  $("#backlog").evently(backlog, app);
  
  $.pathbinder.begin(location.hash || "/unassigned");
});
