function(e, doc) {
  $.log("storyDialog\'s' showEdit event received doc:");
  $.log(doc);
  doc.has_sprint = doc.sprint_number != 'unassigned';
  if (doc.has_sprint) {
    var sprintNumberParts = String(doc.sprint_number).split('-');
    doc.sprint_year = sprintNumberParts[0];
    doc.sprint_number = sprintNumberParts[1];
  } else {
    doc.sprint_year = null;
    doc.sprint_number = null;
  }
  return doc;
}
