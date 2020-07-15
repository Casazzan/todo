import todoFactory from "./todo";
import projectFactory from "./project";
import { format as formatDate } from "date-fns";
import { loadNewTodoForm, newProject } from "./newForms";

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
document.getElementById("project-btn").addEventListener("click", newProject);

const displayController = (() => {
  const updateProjectDisplay = () => {
    emptyProjectDisplay();

    const container = document.getElementById("proj-list");
    const bottomElement = document.getElementById("new-proj-container");
    const projects = dataController.getProjects();

    projects.forEach((proj) => {
      const p = document.createElement("p");
      p.classList.add("project");
      p.textContent = proj.name;
      container.insertBefore(p, bottomElement);
    });
  };

  const emptyProjectDisplay = () => {
    const container = document.getElementById("proj-list");
    while (container.childNodes.length > 2) {
      container.removeChild(container.firstChild);
    }
  };

  return { updateProjectDisplay };
})();

const dataController = (() => {
  const projects = [];

  const addNewProject = (name) => {
    projects.push(projectFactory(name));
    displayController.updateProjectDisplay();
  };

  const addExistingProject = (proj) => {
    projects.push(proj);
  };

  const addTodoToProject = (projectName, todo) => {
    const idx = projects.indexOf(projectName);
    if (idx > -1) {
      projects[idx].addTodo(todo);
    }
  };

  const getProjects = () => {
    return projects;
  };
  return { addNewProject, addTodoToProject, getProjects };
})();

export { dataController };
