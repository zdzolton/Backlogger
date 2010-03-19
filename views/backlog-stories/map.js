function(doc) {
  if (doc.type == 'story') {
    emit(doc.priority, doc);
  }
}
