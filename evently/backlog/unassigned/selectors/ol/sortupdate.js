function(e, ui) {
  var currentItem = ui.item;
  $.log('Element moved:');
  var currentItemID = currentItem.attr("data-id");
  $.log(currentItemID);
  
  $.log('Next element priority:');
  var nextItemPriority = parseFloat(currentItem.next().attr("data-priority"));
  $.log(nextItemPriority);
  
  $.log('Previous element:');
  var prevItemPriority = parseFloat(currentItem.prev().attr("data-priority"));
  $.log(prevItemPriority);

  var app = $$(this).app;
  app.db.openDoc(currentItemID, {
    success: function(doc) {
      $.log('Queried doc:');
      $.log(doc);
      
      if (nextItemPriority && prevItemPriority) {
        $.log("Take average"); 
        doc.priority = (nextItemPriority + prevItemPriority) / 2.0;
      } else if (!nextItemPriority) {
        $.log("After prev");
        doc.priority = prevItemPriority + 1;
      } else if (!prevItemPriority) {
        $.log("Before next"); 
        doc.priority = nextItemPriority - 1;
      }
      
      $.log('Saving doc with new priority:');
      $.log(doc.priority);
      app.db.saveDoc(doc);
    }
  })
}
