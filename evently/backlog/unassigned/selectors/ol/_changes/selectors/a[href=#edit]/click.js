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
        width: 400,
        height: 620
      });
    }
  });
  return false;
}
