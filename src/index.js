import todoFactory from "./todo";
import projectFactory from "./project";
import { format as formatDate } from "date-fns";
import { loadNewTodoForm, newProject } from "./newForms";

const projectDisplayController = (() => {
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
    else mainDisplayController.openProject(idx);
  };

  const emptyProjectDisplay = () => {
    const container = document.getElementById("proj-list");
    while (container.childNodes.length > 2) {
      container.removeChild(container.firstChild);
    }
  };

  return { updateProjectDisplay };
})();

const mainDisplayController = (() => {
  const openProject = (idx) => {
    const project = dataController.getProject(idx);

    document.getElementById("display-proj").textContent = project.name;

    updateTodoDisplay(project.todos);
    dataController.activeProjectIdx = idx;
  };

  const updateTodoDisplay = (todos) => {
    const container = document.getElementById("todos");
    container.setAttribute("display", "none"); //TEST W/O this
    clearTodoDisplay();

    let idx = 0;
    for (let idx = 0; idx < todos.length; idx++) {
      const item = todos[idx];
      const todo = document.createElement("div");
      todo.classList = "todo";
      todo.dataset.idx = idx;

      const todoContent = document.createElement("div");
      todoContent.classList = "todo-content";

      const todoMain = document.createElement("div");
      todoMain.classList = "todo-main";
      if (item.name) todoMain.appendChild(createTextElement("name", item.name));
      else todoMain.appendChild(createTextElement("name", "Unnamed Todo"));
      if (item.date) todoMain.appendChild(createTextElement("date", item.date));
      todoMain.appendChild(createTextElement("priority", item.priority));
      if (item.isCompleted) {
        item.classList.add("complete");
      }
      todoContent.appendChild(todoMain);

      if (item.notes || item.subList) {
        const todoSub = document.createElement("div");
        todoSub.classList = "todo-sub hidden";
        if (item.notes) {
          todoSub.appendChild(
            createTextElement("notes", "Notes: " + item.notes)
          );
        }
        if (item.subList) {
          const subList = document.createElement("div");
          subList.id = "sub-list";
          item.subList.forEach((subItem) => {
            subList.appendChild(createTextElement("sub-item", subItem));
          });
          todoSub.appendChild(subList);
        }
        todoContent.appendChild(todoSub);

        todoMain.classList.add("clickable");
        todoMain.addEventListener("click", revealTodoSub);
      }

      const todoBtns = document.createElement("div");
      todoBtns.classList = "todo-btns";
      todoBtns.appendChild(createEditButton());
      todoBtns.appendChild(createDeleteButton());

      todo.appendChild(todoBtns);
      todo.appendChild(todoContent);

      container.appendChild(todo);
    }

    container.setAttribute("display", "");
  };

  const revealTodoSub = (e) => {
    //hide other revealed element
    const element = document.querySelector(".shown");
    if (element) {
      element.classList.toggle("shown");
      element.classList.toggle("hidden");
    }

    const subContent = e.target.parentNode.nextSibling;
    if (subContent && subContent !== element) {
      subContent.classList.toggle("shown");
      subContent.classList.toggle("hidden");
    }
  };

  const createTextElement = (pClass, text) => {
    const p = document.createElement("p");
    p.classList = pClass;
    p.textContent = text;
    return p;
  };

  const createEditButton = () => {
    const button = document.createElement("button");
    button.classList.add("edit-btn");
    button.textContent = "...";
    button.setAttribute("type", "button");
    button.setAttribute("title", "Edit");
    button.addEventListener("click", (e) => {
      dataController.editTodo(e.target.parentNode.parentNode.dataset.idx);
    });
    return button;
  };

  const createDeleteButton = () => {
    const button = document.createElement("button");
    button.classList.add("del-btn");
    button.textContent = "X";
    button.setAttribute("type", "button");
    button.setAttribute("title", "Delete");
    button.addEventListener("click", function (e) {
      if (confirm("Are you sure you want to delete this Todo?")) {
        dataController.removeTodo(e.target.parentNode.parentNode.dataset.idx);
      }
    });
    return button;
  };

  const clearTodoDisplay = () => {
    const container = document.getElementById("todos");
    while (container.hasChildNodes()) {
      container.removeChild(container.lastChild);
    }
  };
  return { openProject, updateTodoDisplay };
})();

const dataController = (() => {
  let activeProjectIdx = 0;
  const projects = [];

  const addNewProject = (name) => {
    projects.push(projectFactory(name));
    projectDisplayController.updateProjectDisplay();
    mainDisplayController.openProject(projects.length - 1);
  };

  const addExistingProject = (proj) => {
    projects.push(proj);
  };

  const addTodoToProject = (project, todo) => {
    project.addTodo(todo);
  };

  const getProjects = () => {
    return projects;
  };

  const getActiveProject = () => {
    return getProject(activeProjectIdx);
  };

  const getProject = (idx) => {
    return projects[idx];
  };

  const removeTodo = (idx) => {
    getActiveProject().removeTodoByIdx(idx);
    mainDisplayController.updateTodoDisplay(getActiveProject().todos);
  };

  const addTodo = (projectName, name, date, notes, priority, subList) => {
    const todo = todoFactory(name, date, notes, priority, subList);
    let idx = 0;
    for (let i = 1; i < projects.length; i++) {
      if ((projects[i].name = projectName)) {
        addTodoToProject(projects[i], todo);
        idx = i;
      }
    }
    addTodoToProject(projects[0], todo);
    mainDisplayController.openProject(idx);
  };

  return {
    addNewProject,
    addTodoToProject,
    getProjects,
    addExistingProject,
    getProject,
    addTodo,
    getActiveProject,
    removeTodo,
    activeProjectIdx,
  };
})();

const todoWithSublist = todoFactory(
  "Conquer the world",
  formatDate(new Date(2020, 6, 20), "mm-dd-yyyy"),
  "Be ruler of every country",
  "!!!",
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

projectDisplayController.updateProjectDisplay();
mainDisplayController.openProject(0);
export { dataController };
