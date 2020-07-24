import { dataController } from "./index";
import { parseISO, format as formatDate } from "date-fns";

const loadTodoForm = (
  projectName,
  name,
  notes,
  date,
  priority,
  subList,
  oldIdx = null
) => {
  const container = document.createElement("div");
  container.id = "todo-form";
  if (oldIdx) {
    container.dataset.idx = oldIdx;
    console.log(oldIdx);
  }

  const head = document.createElement("h1");
  head.textContent = "Create New To Do";
  head.id = "form-header";
  container.appendChild(head);

  const exit = document.createElement("button");
  exit.setAttribute("type", "button");
  exit.id = "exit-form";
  exit.title = "Exit";
  exit.innerHTML = "X";
  exit.addEventListener("click", deleteForm);
  container.appendChild(exit);

  container.appendChild(createLabel("Project", "proj"));

  const projectSelector = document.createElement("select");
  projectSelector.id = "proj";
  projectSelector.appendChild(createOption("proj", "None"));

  let index = 0;

  const projects = dataController.getProjects();
  for (let i = 1; i < projects.length; i++) {
    projectSelector.appendChild(createOption("proj", projects[i].name));
    if (projects[i].name === projectName) {
      index = i;
    }
  }

  projectSelector.selectedIndex = index;

  container.appendChild(projectSelector);

  container.appendChild(createLabel("Add Sub Task", "task-container"));
  const taskContainer = document.createElement("div");
  taskContainer.id = "task-container";

  const addBtn = document.createElement("button");
  addBtn.id = "add-btn";
  addBtn.setAttribute("type", "button");
  addBtn.innerHTML = "+";
  addBtn.addEventListener("click", addSubTask);
  taskContainer.appendChild(addBtn);

  container.appendChild(taskContainer);

  container.appendChild(createLabel("Todo name", "name"));
  container.appendChild(createInput("name", "text", name));

  container.appendChild(createLabel("Notes", "note"));
  const note = document.createElement("textarea");
  note.id = "note";
  note.setAttribute("rows", "4");
  note.value = notes;
  container.appendChild(note);

  container.appendChild(createLabel("Due Date", "date"));
  container.appendChild(createInput("date", "date", date));

  container.appendChild(createLabel("Priority", "prior"));
  const prioritySelector = document.createElement("select");
  prioritySelector.id = "prior";
  prioritySelector.appendChild(createOption("prior", "None", ""));
  prioritySelector.appendChild(createOption("prior", "Low", "!"));
  prioritySelector.appendChild(createOption("prior", "Medium", "!!"));
  prioritySelector.appendChild(createOption("prior", "High", "!!!"));
  if (priority === "!") prioritySelector.selectedIndex = 1;
  if (priority === "!!") prioritySelector.selectedIndex = 2;
  if (priority === "!!!") prioritySelector.selectedIndex = 3;
  container.appendChild(prioritySelector);

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.classList.add("submit-btn");
  submitBtn.addEventListener("click", submitTodoForm);
  submitBtn.innerHTML = "Submit";
  container.appendChild(submitBtn);

  document.body.prepend(container);

  document.querySelector("#main").classList.add("dimmed");
  document.querySelector("header").classList.add("dimmed");
  if (subList) {
    subList.forEach((task) => {
      addSubTaskWithText(task);
    });
  }
};

const createOption = (name, option, value = option) => {
  const opt = document.createElement("option");
  opt.setAttribute("name", name);
  opt.value = value;
  opt.innerHTML = option;
  return opt;
};

const createInput = (id, type, val) => {
  const input = document.createElement("input");
  input.value = val;
  input.id = id;
  input.setAttribute("type", type);
  return input;
};

const createLabel = (innerHtml, id) => {
  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.innerHTML = innerHtml;
  return label;
};

const loadNewTodoForm = (projectName) => {
  loadTodoForm(projectName, "", "", "", 0, "");
};

//parameter to distinguish which one
const loadCurrentTodoForm = (
  project,
  name,
  notes,
  date,
  prior,
  subList,
  idx
) => {
  loadTodoForm(project, name, notes, date, prior, subList, idx);
};

const submitTodoForm = () => {
  const projectName = document.getElementById("proj").value;
  const name = document.getElementById("name").value;
  const notes = document.getElementById("note").value;
  let date = document.getElementById("date").value;
  if (date) {
    date = formatDate(parseISO(date), "mm-dd-yyyy");
  }
  const priority = document.getElementById("prior").value;

  const subList = [];
  const tasks = document.getElementById("task-container").childNodes;
  tasks.forEach((task) => {
    if (task.value) {
      subList.push(task.value);
    }
  });
  const container = document.getElementById("todo-form");
  if (container.hasAttribute("data-idx")) {
    dataController.changeTodo(
      projectName,
      name,
      date,
      notes,
      priority,
      subList,
      container.dataset.idx
    );
  } else {
    dataController.addTodo(projectName, name, date, notes, priority, subList);
  }

  deleteForm();
};

const newProject = () => {
  const input = document.getElementById("project-input");
  const name = input.value;
  if (name) {
    dataController.addNewProject(name);
    input.value = "";
  }
};
const deleteForm = () => {
  const container = document.querySelector("#todo-form");
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }

  container.parentNode.removeChild(container);
  document.querySelector("#main").classList.remove("dimmed");
  document.querySelector("header").classList.remove("dimmed");
};

const addSubTask = () => {
  addSubTaskWithText("");
};

const addSubTaskWithText = (task) => {
  const container = document.getElementById("task-container");
  const subTask = document.createElement("input");
  subTask.classList.add("sub-task");
  subTask.setAttribute("type", "text");
  subTask.value = task;
  container.prepend(subTask);
};

export { newProject, loadNewTodoForm, loadCurrentTodoForm };
