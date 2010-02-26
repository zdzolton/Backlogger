// $.couch.app() loads the design document from the server and
// then calls our application.
$.couch.app(function(app) {
  $("#new_story").evently(app.ddoc.evently.new_story, app);

  $.pathbinder.begin("/");
});
