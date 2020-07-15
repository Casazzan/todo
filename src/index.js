import todoFactory from "./todo";
import projectFactory from "./project";
import { format as formatDate } from "date-fns";
import { loadNewTodoForm, newProject } from "./newForms";

const createDateObj = (day, month, year) => {
  return new Date(year, month, day);
};

const displayController = (() => {
  const updateProjectDisplay = () => {
    emptyProjectDisplay();

    const container = document.getElementById("proj-list");
    const bottomElement = document.getElementById("new-proj-container");
    const projects = dataController.getProjects();

    for (let i = 0; i < projects.length; i++) {
      const p = document.createElement("p");
      p.classList.add("project");
      p.dataset.idx = i;
      p.textContent = projects[i].name;
      p.addEventListener("click", openProjectEvent);
      container.insertBefore(p, bottomElement);
    }
  };

  const openProjectEvent = (e) => {
    const idx = e.target.dataset.idx;
    if (!idx) console.log("Error: " + e + "has no idx");
    else openProject(idx);
  };
  const openProject = (idx) => {
    const project = dataController.getProject(idx);

    document.getElementById("display-proj").textContent = project.name;
  };

  const emptyProjectDisplay = () => {
    const container = document.getElementById("proj-list");
    while (container.childNodes.length > 2) {
      container.removeChild(container.firstChild);
    }
  };

  return { updateProjectDisplay, openProject };
})();

const dataController = (() => {
  const projects = [];

  const addNewProject = (name) => {
    projects.push(projectFactory(name));
    displayController.updateProjectDisplay();
    displayController.openProject(projects.length - 1);
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

  const getProject = (idx) => {
    return projects[idx];
  };
  return {
    addNewProject,
    addTodoToProject,
    getProjects,
    addExistingProject,
    getProject,
  };
})();

const todoWithSublist = todoFactory(
  "Conquer the world",
  createDateObj(1, 1, 2002),
  "Be ruler of every country",
  2,
  ["conquer england", "tell england to conquer everyone else"]
);

const projectTest = projectFactory("All Tasks");
projectTest.addTodo(todoWithSublist);

dataController.addExistingProject(projectTest);

document.getElementById("todo-btn").addEventListener("click", loadNewTodoForm);
document.getElementById("project-btn").addEventListener("click", newProject);
document.getElementById("project-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    newProject();
  }
});

displayController.updateProjectDisplay();
export { dataController };
