function(e, doc) {
  $.log("storyDialog\'s' showEdit event received doc:");
  $.log(doc);
  doc.sprint_number = doc.sprint_number || 'unassigned';
  return doc;
}
