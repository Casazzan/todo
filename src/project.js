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

  return { name, todos, addTodo, removeTodo, removeTodoByIdx };
};

export default projectFactory;
