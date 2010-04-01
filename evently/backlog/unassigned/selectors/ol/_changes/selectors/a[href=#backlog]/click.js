function() {
  var a = $(this);
  var parentLi = a.parents('li');
  var storyName = $('.story_name', parentLi).text();
  var id = parentLi.attr('data-id');
  var app = $$(this).app;
  var db = app.db;

  // TODO: refactor this out, too!
  function getLowestPriorityForBacklog(cb) {
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
  }

  db.openDoc(id, {
    success: function(doc) {      
      getLowestPriorityForBacklog(function(priority) {
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
