const projectFactory = (name) => {
  const todos = [];

  const addTodo = (todo) => {
    todos.push(todo);
  };

  const removeTodo = (todo) => {
    const index = todos.indexOf(todo);
    if (index > -1) {
      todos.splice(index, 1);
    }
  };

  const removeTodoByIdx = (idx) => {
    todos.splice(idx, 1);
  };

  const getTodo = (idx) => {
    return todos[idx];
  };

  return { name, todos, addTodo, removeTodo, removeTodoByIdx, getTodo };
};

export default projectFactory;
