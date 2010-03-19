// $.couch.app() loads the design document from the server and then calls our application.
$.couch.app(function(app) {
  $("#new_story_dialog").evently(app.ddoc.evently.new_story_dialog, app);
  $("#backlog").evently(app.ddoc.evently.backlog, app);
  $("#content").evently(app.ddoc.evently.content, app);

  $.pathbinder.begin("/");
});
