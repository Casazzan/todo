import todoFactory from "./todo";
import projectFactory from "./project";
import { format as formatDate } from "date-fns";
import { loadNewTodoForm, loadNewProjectForm } from "./newForms";

const createDateObj = (day, month, year) => {
  return new Date(year, month, day);
};

const todoWithSublist = todoFactory(
  "Conquer the world",
  createDateObj(1, 1, 2002),
  "be ruler of every country",
  2,
  ["conquer england", "tell england to conquer everyone else"]
);

const project = projectFactory("fun activities");
project.addTodo(todoWithSublist);
console.log("project: " + JSON.stringify(project));

document.getElementById("todo-btn").addEventListener("click", loadNewTodoForm);
document
  .getElementById("project-btn")
  .addEventListener("click", loadNewProjectForm);
