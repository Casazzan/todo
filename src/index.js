import todoFactory from "./todo";
import projectFactory from "./project";
import { format as formatDate } from "date-fns";
import { loadNewTodoForm, loadNewProjectForm } from "./newForms";

const createDateObj = (day, month, year) => {
  return new Date(year, month, day);
};

const date1 = createDateObj(1, 1, 2002);
const todo = todoFactory(
  "Wash Clothes",
  date1,
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

loadNewTodoForm();

//loadNewProjectForm();
