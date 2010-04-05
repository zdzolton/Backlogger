function() {
  var a = $(this);
  if ($$(a).moveToSprintNumber) {
    a.trigger('_init'); 
  } else {
    $('#move_dialog').dialog({
      modal: true,
      width: 350,
      height: 220
    }).trigger('show');
    $('#backlog a[href=#move]').show();
  }
}
