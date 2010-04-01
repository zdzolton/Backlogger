function(e) {
  
  function parseSprintNumber() {
    var sprintNumber = $("input[name=sprint_number]", f).val();
    var sprintYear = $("input[name=sprint_year]", f).val();
    $.log('A');
    if (sprintNumber.length > 0) {
      if (sprintYear.length > 0) {
        $.log('B');
        sprintNumber = parseInt(sprintNumber);
        sprintYear = parseInt(sprintYear);
        // (^u^) cheap zero-pad!
        sprintNumber = (sprintNumber < 10 ? '0' : '') + String(sprintNumber); 
        sprintNumber = sprintYear + '-' + sprintNumber;
      } else {
        $.log('C');
        alert('Sprint number without year!');
        return;
      }
    } else {
      if (sprintYear.length > 0) {
        $.log('D');
        alert('Sprint year without number!');
        return;
      } else {
        $.log('E');
        sprintNumber = "unassigned";
      }
    }
    return sprintNumber;
  }
  
  var f = $(this);
  $('#story_dialog').dialog('close');
  var id = $("input[name=_id]", f).val();
  $.log('Updating doc ID: ' + id);
  var app = $$(this).app;
  var db = app.db;
  db.openDoc(id, {
    success: function(doc) {
      $.log('Retrieved doc:');
      $.log(doc);
      
      $.log('Old sprint number:');
      var oldSprintNum = doc.sprint_number;
      
      $.log('New sprint number:');
      var sprintNumber = parseSprintNumber();
      if (typeof sprintNumber === 'undefined') {
        $.log('Bailing early for validation problem!');
        return;
      }
      $.log(sprintNumber);
      
      $.extend(doc, {
        name: $("input[name=name]", f).val(),
        sprint_number: sprintNumber,
        complexity: $("select[name=complexity]", f).val(),
        business_value: $("select[name=business_value]", f).val(),
        acceptance_criteria: $("textarea[name=acceptance_criteria]", f).val(),
        notes: $("textarea[name=notes]", f).val()
      });
      
      if (doc.sprint_number == oldSprintNum) {
        $.log('Updated doc:');
        $.log(doc);
        db.saveDoc(doc);        
      } else {
        $.log('Sprint number changed:');
        $.log(doc.sprint_number);
        app.getHighestPriorityForSprint(sprintNumber, function(priority) {
          $.log('Last priority:');
          $.log(priority);
          doc.priority = priority + 1;
          $.log('Saving document:');
          $.log(doc);
          app.db.saveDoc(doc);
        });
      }
    }
  });
  return false;
}
