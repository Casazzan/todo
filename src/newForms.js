import { dataController } from "./index";
import { parseISO, format as formatDate } from "date-fns";

const loadTodoForm = (projectName, name, notes, date, priority, subList) => {
  const container = document.createElement("div");
  container.classList.add("todo-form");
  container.classList.add("form");

  container.appendChild(createLabel("Project", "proj"));

  const projectSelector = document.createElement("select");
  projectSelector.id = "proj";
  projectSelector.appendChild(createOption("proj", "None"));

  let index = 0;

  const projects = dataController.getProjects();
  for (let i = 1; i < projects.length; i++) {
    projectSelector.appendChild(createOption("proj", projects[i].name));
    if ((projects[i].name = projectName)) {
      index = i - 1;
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

const loadNewTodoForm = () => {
  console.log(dataController.getActiveProject());
  loadTodoForm(dataController.getActiveProject().name, "", "", "", 0, "");
};

//parameter to distinguish which one
const loadCurrentTodoForm = () => {};

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

  dataController.addTodo(projectName, name, date, notes, priority, subList);
  //TODO format these values to what things will be stored as
  //TODO add todo to that project

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
  const container = document.querySelector(".form");
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }

  container.parentNode.removeChild(container);
};

const addSubTask = () => {
  const container = document.getElementById("task-container");
  const subTask = document.createElement("input");
  subTask.classList.add("sub-task");
  subTask.setAttribute("type", "text");
  container.prepend(subTask);
};

export { newProject, loadNewTodoForm };