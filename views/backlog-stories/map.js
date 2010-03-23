function(doc) {
  if (doc.type == 'story') {
    emit([doc.sprint_number, doc.priority * -1], doc);
  }
}
