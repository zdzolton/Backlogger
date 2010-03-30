function() {
  $('#story_dialog').trigger(
    "showNew", 
    []
  ).dialog({
    modal: true,
    width: 400,
    height: 560
  });
}
