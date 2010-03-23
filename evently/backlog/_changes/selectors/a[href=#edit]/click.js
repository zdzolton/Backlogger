function() {
  var a = $(this);
  var id = a.parents('li').attr('data-id');
  $$(this).app.db.openDoc(id, {
    success: function(doc) {
      $.log("Received doc:");
      $.log(doc);
      $('#story_dialog').trigger(
        "showEdit", 
        [doc]
      ).dialog({
        modal: true,
        width: 350,
        height: 550
      }).attr(
        "title", 
        "Add a new story to the backlog"
      );
    }
  });
  return false;
}
