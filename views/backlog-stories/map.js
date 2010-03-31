function(doc) {
  if (doc.type == 'story') {
    var sprintNumber = String(doc.sprint_number || 'unassigned');
    emit([sprintNumber, doc.priority * -1], doc);
  }
}
