function(newDoc, oldDoc, userCtx) {
  if (userCtx.roles.indexOf('backlogger') == -1) {
    throw({ forbidden: 'You must be logged in to save data' });
  }
}
