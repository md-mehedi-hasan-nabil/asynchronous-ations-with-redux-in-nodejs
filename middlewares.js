const delayActionMiddleWare = (store) => (next) => (action) => {
  if (action.type === 'todos/todoAdded') {
    console.log('delay...');
    setTimeout(() => {
      next(action);
    }, 3000);
    return;
  }

  return next(action);
};

const fetchTodosMiddleWare = (store) => (next) => async (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

module.exports = { delayActionMiddleWare, fetchTodosMiddleWare };
