const { default: fetch } = require("node-fetch");

async function fetchTodos(dispatch, getState) {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=4'
  );
  const todos = await response.json();

  dispatch({
    type: 'todos/todoLoadded',
    payload: todos,
  });

  console.log(getState())
}

module.exports = {
  fetchTodos,
};
