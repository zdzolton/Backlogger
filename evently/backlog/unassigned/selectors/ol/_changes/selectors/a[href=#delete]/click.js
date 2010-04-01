function() {
  var a = $(this);
  var parentLi = a.parents('li');
  var storyName = $('.story_name', parentLi).text();
  $.log('User clicked to delete story:');
  $.log(storyName);
  var message = "Delete story?\n" + storyName;
  if (confirm(message)) {
    var id = parentLi.attr('data-id');
    var db = $$(this).app.db;
    db.openDoc(id, {
      success: function(doc) {
        $.log("Deleting doc:");
        $.log(doc);
        db.removeDoc(doc, {
          success: function() {
            $.log('Item deleted, yo.');
          }
        });
      }
    });
  }
  return false;
}
