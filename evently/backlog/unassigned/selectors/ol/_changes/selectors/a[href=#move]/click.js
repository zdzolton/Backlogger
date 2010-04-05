function() {
  var sprintNumber = $$('#move_stories').moveToSprintNumber;
  var a = $(this);
  var parentLi = a.parents('li');
  var id = parentLi.attr('data-id');
  var app = $$(this).app;
  var db = app.db;
  
  db.openDoc(id, {
    success: function(doc) {      
      app.getHighestPriorityForSprint(sprintNumber, function(priority) {
        $.log('Highest priority:');
        $.log(priority);
        doc.priority = priority + 1;
        doc.sprint_number = sprintNumber;
        $.log('Moving story to sprint:');
        $.log(doc);
        app.db.saveDoc(doc);
      });
    }
  });
  return false;
}
