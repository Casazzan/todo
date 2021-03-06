import todoFactory from "./todo";
import projectFactory from "./project";
import { parseISO, format as formatDate, sub } from "date-fns";
import { loadNewTodoForm, newProject, loadCurrentTodoForm } from "./newForms";

const projectDisplayController = (() => {
  const updateProjectDisplay = () => {
    emptyProjectDisplay();

    const container = document.getElementById("proj-list");
    const bottomElement = document.getElementById("new-proj-container");
    const projects = dataController.getProjects();

    for (let i = 0; i < projects.length; i++) {
      const div = document.createElement("div");
      div.classList = "project-div";
      const p = document.createElement("p");
      p.classList.add("project");
      p.dataset.idx = i;
      p.textContent = projects[i].name;
      p.addEventListener("click", openProjectEvent);
      div.appendChild(p);
      div.appendChild(createDeleteButton());
      container.insertBefore(div, bottomElement);
    }
  };

  const createDeleteButton = () => {
    const button = document.createElement("button");
    button.classList.add("proj-del-btn");
    button.classList.add("clickable");
    button.innerHTML = '<i class="fas fa-trash"></i>';
    button.setAttribute("type", "button");
    button.setAttribute("title", "Delete");
    button.addEventListener("click", function (e) {
      if (confirm("Are you sure you want to delete this Project?")) {
        dataController.removeProject(
          e.target.parentNode.previousSibling.dataset.idx
        );
      }
    });
    return button;
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
    if (project) {
      document.getElementById("display-proj").textContent = project.name;

      updateTodoDisplay(project.todos);
    } else {
      document.getElementById("display-proj").textContent = "";
      updateTodoDisplay([]);
    }
    dataController.setActiveProjectIdx(idx);
  };

  const updateTodoDisplay = (todos) => {
    const container = document.getElementById("todos");
    container.setAttribute("display", "none"); //TEST W/O this
    clearTodoDisplay();

    for (let idx = 0; idx < todos.length; idx++) {
      const item = todos[idx];
      const todo = document.createElement("div");
      todo.classList = "todo";
      todo.dataset.idx = idx;

      const todoContent = document.createElement("div");
      todoContent.classList = "todo-content";

      const todoMain = document.createElement("div");
      todoMain.classList = "todo-main";
      const box = createCheckbox(idx);
      if (item.isCompleted) {
        box.setAttribute("checked", "checked");
      }
      box.addEventListener("click", checkClicked);
      todoMain.appendChild(box);
      if (item.name) todoMain.appendChild(createTextElement("name", item.name));
      else todoMain.appendChild(createTextElement("name", "Unnamed Todo"));
      if (item.date) {
        try {
          todoMain.appendChild(
            createTextElement(
              "date",
              formatDate(parseISO(item.date), "MMMM do, yyyy")
            )
          );
        } catch (e) {
          console.log("Parse Iso Date Error: " + e);
        }
      }
      const priority = createTextElement("priority", item.priority);
      if (item.priority === "!") priority.classList.add("low-p");
      if (item.priority === "!!") priority.classList.add("medium-p");
      if (item.priority === "!!!") priority.classList.add("high-p");
      todoMain.appendChild(priority);
      if (item.isCompleted) {
        todo.classList.add("complete");
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
          for (let i = 0; i < item.subList.length; i++) {
            const box = createCheckbox(i);
            if (item.isCompleted) {
              box.setAttribute("checked", "checked");
            }
            box.addEventListener("click", subCheckClicked);
            subList.appendChild(box);
            subList.appendChild(createTextElement("sub-item", item.subList[i]));
          }

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
    if (e.target.tagName == "INPUT") return;
    //hide other revealed element
    const element = document.querySelector(".shown");
    if (element) {
      element.classList.toggle("shown");
      element.classList.toggle("hidden");
    }

    let subContent;
    if (e.target.tagName == "P") {
      subContent = e.target.parentNode.nextSibling;
    } else {
      subContent = e.target.nextSibling;
    }
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

  const createCheckbox = (idx) => {
    const box = document.createElement("input");
    box.setAttribute("type", "checkbox");
    box.setAttribute("value", idx);
    box.classList.add("round-check");
    return box;
  };

  const checkClicked = (e) => {
    dataController.changeCompleteState(e.target.value);
    e.target.parentNode.parentNode.parentNode.classList.toggle("complete");
  };

  const subCheckClicked = (e) => {
    e.target.nextSibling.classList.toggle("sub-complete");
  };

  const createEditButton = () => {
    const button = document.createElement("button");
    button.classList.add("edit-btn");
    button.classList.add("clickable");
    button.innerHTML = '<i class="fas fa-edit"></i>';
    button.setAttribute("type", "button");
    button.setAttribute("title", "Edit");
    button.addEventListener("click", (e) => {
      dataController.editTodo(
        e.target.parentNode.parentNode.parentNode.dataset.idx
      );
    });
    return button;
  };

  const createDeleteButton = () => {
    const button = document.createElement("button");
    button.classList.add("del-btn");
    button.classList.add("clickable");
    button.innerHTML = '<i class="fas fa-trash"></i>';
    button.setAttribute("type", "button");
    button.setAttribute("title", "Delete");
    button.addEventListener("click", function (e) {
      dataController.removeTodo(
        e.target.parentNode.parentNode.parentNode.dataset.idx
      );
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
  let projects = [];

  const setActiveProjectIdx = (idx) => {
    activeProjectIdx = idx;
  };

  const addNewProject = (name) => {
    projects.push(projectFactory(name));
    projectDisplayController.updateProjectDisplay();
    mainDisplayController.openProject(projects.length - 1);
    updateStorage();
  };

  const loadStoredProjects = (proj) => {
    projects = proj;
  };

  const addTodoToProject = (project, todo) => {
    project.addTodo(todo);
    updateStorage();
  };

  const removeProject = (idx) => {
    projects.splice(idx, 1);
    projectDisplayController.updateProjectDisplay();
    mainDisplayController.openProject(0);
    updateStorage();
  };

  const getProjects = () => {
    return projects;
  };

  const getActiveProject = () => {
    return projects[activeProjectIdx];
  };

  const getProject = (idx) => {
    return projects[idx];
  };

  const removeTodo = (idx) => {
    getActiveProject().removeTodoByIdx(idx);
    mainDisplayController.updateTodoDisplay(getActiveProject().todos);
  };

  const editTodo = (idx) => {
    const item = getActiveProject().getTodo(idx);
    const projectName = getActiveProject().name;
    loadCurrentTodoForm(
      projectName,
      item.name,
      item.notes,
      item.date,
      item.priority,
      item.subList,
      idx
    );
  };

  const changeTodo = (
    projectName,
    name,
    date,
    notes,
    priority,
    subList,
    idx
  ) => {
    const todo = todoFactory(name, date, notes, priority, subList);
    let projIdx = 0;
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].name === projectName) {
        projIdx = i;
        break;
      }
    }
    projects[projIdx].todos.splice(idx, 1, todo);
    mainDisplayController.updateTodoDisplay(projects[projIdx].todos);
    updateStorage();
  };

  const addTodo = (projectName, name, date, notes, priority, subList) => {
    const todo = todoFactory(name, date, notes, priority, subList);
    let idx = 0;
    for (let i = 1; i < projects.length; i++) {
      if (projects[i].name === projectName) {
        idx = i;
        break;
      }
    }
    addTodoToProject(projects[idx], todo);
    mainDisplayController.openProject(idx);
  };

  const changeCompleteState = (idx) => {
    getActiveProject().todos[idx].isCompleted = !getActiveProject().todos[idx]
      .isCompleted;
  };

  const updateStorage = () => {
    localStorage.setItem("projects", JSON.stringify(projects));
  };

  return {
    addNewProject,
    addTodoToProject,
    getProjects,
    loadStoredProjects,
    getProject,
    addTodo,
    getActiveProject,
    removeTodo,
    editTodo,
    setActiveProjectIdx,
    changeCompleteState,
    changeTodo,
    removeProject,
  };
})();

function initialLoad() {
  if (localStorage.getItem("projects")) {
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    const projects = [];
    storedProjects.forEach((storedProject) => {
      const project = projectFactory(storedProject.name);
      storedProject.todos.forEach((todo) => {
        project.addTodo(todo);
      });
      projects.push(project);
    });
    dataController.loadStoredProjects(projects);
  } else {
    const todoWithSublist = todoFactory(
      "Conquer the world",
      formatDate(new Date(2020, 6, 20), "yyyy-MM-dd"),
      "Be ruler of every country",
      "!!!",
      ["conquer england", "tell england to conquer everyone else"]
    );

    const projectTest = projectFactory("Unassigned To Do's");
    projectTest.addTodo(todoWithSublist);
    const projects = [projectTest];
    dataController.loadStoredProjects(projects);
  }

  document.getElementById("todo-btn").addEventListener("click", () => {
    loadNewTodoForm(dataController.getActiveProject().name);
  });
  document.getElementById("project-btn").addEventListener("click", newProject);
  document.getElementById("project-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      newProject();
    }
  });

  projectDisplayController.updateProjectDisplay();
  mainDisplayController.openProject(0);
}

initialLoad();

export { dataController };
