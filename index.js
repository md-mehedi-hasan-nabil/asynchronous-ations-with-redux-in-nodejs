const { createStore, applyMiddleware } = require('redux');
const { default: thunk } = require('redux-thunk');
const { fetchTodos } = require('./fetchTodos');
const {
  delayActionMiddleWare,
  fetchTodosMiddleWare,
} = require('./middlewares');

// initial state
const initialState = {
  todos: [],
};

// reducer function
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'todos/todoAdded':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };

    case 'todos/todoLoadded':
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };

    default:
      break;
  }
}

// redux store
const store = createStore(
  todoReducer,
  applyMiddleware(thunk /*delayActionMiddleWare, fetchTodosMiddleWare*/)
);

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: 'todos/todoAdded',
//   payload: 'Learn with Nabil',
// });

store.dispatch(fetchTodos);
