const projectFactory = (name) => {
  let todos = [];

  const setTodos = (t) => {
    obj.todos = t;
  };
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

  const obj = {
    todos,
    name,
    addTodo,
    removeTodo,
    removeTodoByIdx,
    getTodo,
    setTodos,
  };

  return obj;
};

export default projectFactory;
