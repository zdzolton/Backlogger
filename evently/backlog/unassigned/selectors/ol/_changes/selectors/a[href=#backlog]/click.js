function() {
  var a = $(this);
  var parentLi = a.parents('li');
  var storyName = $('.story_name', parentLi).text();
  var id = parentLi.attr('data-id');
  var app = $$(this).app;
  var db = app.db;

  db.openDoc(id, {
    success: function(doc) {      
      app.getLowestPriorityForBacklog(function(priority) {
        $.log('Lowest priority:');
        $.log(priority);
        doc.priority = priority - 1;
        doc.sprint_number = 'unassigned';
        $.log("Sending doc to backlog:");
        $.log(doc);
        app.db.saveDoc(doc);
      });
    }
  });
  return false;
}
