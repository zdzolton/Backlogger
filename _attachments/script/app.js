// $.couch.app() loads the design document from the server and then calls our application.
$.couch.app(function(app) {
  $.log('Backlogger Start!');
  $("#story_dialog").evently(app.ddoc.evently.story_dialog, app);
  $("#backlog").evently(app.ddoc.evently.backlog, app);
  $("#sprint_controls").evently(app.ddoc.evently.sprint_controls, app);

  $.pathbinder.begin("/");
});
