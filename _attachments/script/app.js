// $.couch.app() loads the design document from the server and then calls our application.
$.couch.app(function(app) {
  $.log('Backlogger Start!');
  $("#story_dialog").evently(app.ddoc.evently.story_dialog, app);
  $("#sprint_controls").evently(app.ddoc.evently.sprint_controls, app);  
  
  // This hack allows the backlog's "sprint" event to share templates
  // and behaviors from the "unassigned" event:
  var backlog = app.ddoc.evently.backlog;
  backlog.sprint = $.extend(true, {}, backlog.unassigned, backlog.sprint);
  $.log(backlog)
  $("#backlog").evently(backlog, app);
  
  $.pathbinder.begin(location.hash || "/unassigned");
});
