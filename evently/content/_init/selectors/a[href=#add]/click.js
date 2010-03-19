function() {
  $('#new_story_dialog')
    .trigger("show", [])
    .dialog({
      modal: true,
      width: 350,
      height: 550
    });
}
