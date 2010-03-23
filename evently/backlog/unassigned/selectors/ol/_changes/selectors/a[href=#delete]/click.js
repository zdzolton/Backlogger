function() {
  var a = $(this);
  var id = a.parents('li').attr('data-id');
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
  return false;
}
