// $.couch.app() loads the design document from the server and then calls our application.
$.couch.app(function(app) {
  $.log('Backlogger Start!');
  $("#story_dialog").evently(app.ddoc.evently.story_dialog, app);
  $("#backlog").evently(app.ddoc.evently.backlog, app);
  $("#content").evently(app.ddoc.evently.content, app);

  $.pathbinder.begin("/");
});
