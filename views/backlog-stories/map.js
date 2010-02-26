function(doc) {
  if (doc.type == 'story') {
    emit(doc.created_at, doc);
  }
}
