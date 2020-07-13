import todoFactory from "./todo";
import projectFactory from "./project";

const todo = todoFactory(
  "Wash Clothes",
  "January",
  "Description of washing clothes",
  1
);
console.log("todo: ", JSON.stringify(todo));

const todoWithSublist = todoFactory(
  "Conquer the world",
  "today",
  "be ruler of every country",
  2,
  ["conquer england", "tell england to conquer everyone else"]
);
console.log("todoWithSublist: ", JSON.stringify(todoWithSublist));

const project = projectFactory("fun activities");
project.addTodo(todo);
console.log("project: " + JSON.stringify(project));
console.log(project.getTodos());
