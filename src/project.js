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

  const getTodos = () => {
    return todos;
  };

  return { name, addTodo, removeTodo, getTodos };
};

export default projectFactory;
