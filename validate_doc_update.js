function(newDoc, oldDoc, userCtx) {
  if (!userCtx.name) {
    throw({ forbidden : 'You must be logged in to save data' });
  }
}
