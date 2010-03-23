function(doc) {
  if (doc.type == 'story') {
    emit(doc.sprint_number, 1);
  }
}
