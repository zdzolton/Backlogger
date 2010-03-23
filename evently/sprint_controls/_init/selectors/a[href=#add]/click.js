function() {
  $('#story_dialog').trigger(
    "showNew", 
    []
  ).dialog({
    modal: true,
    width: 350,
    height: 550
  }).attr(
    "title", 
    "Add a new story"
  );
}
