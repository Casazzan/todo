const loadTodoForm = (projectName, name, notes, date, priority, subList) => {
  const container = document.createElement("div");
  container.classList.add("todo-form");
  container.classList.add("form");

  container.appendChild(createLabel("Project", "proj"));

  const projectSelector = document.createElement("select");
  projectSelector.id = "proj";
  projectSelector.appendChild(createOption("proj", "None"));
  //TODO for each through all projects and create option
  let index = 0;
  /*
    const projects = getProjects();
    for(let i = 0; i < projects.length; i++) {
        projectSelector.appendChild(createOption("proj", project.name));
        if(project.name = projectName) {
            index = i;
        }
    }
    */
  projectSelector.selectedIndex = index;

  container.appendChild(projectSelector);

  container.appendChild(createLabel("Add Sub Task"), "tasks");
  const taskContainer = document.createElement("div");
  taskContainer.id = "task-container";

  const addBtn = document.createElement("button");
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
  prioritySelector.appendChild(createOption("prior", "None", 0));
  prioritySelector.appendChild(createOption("prior", "Low", 1));
  prioritySelector.appendChild(createOption("prior", "Medium", 2));
  prioritySelector.appendChild(createOption("prior", "High", 3));
  prioritySelector.selectedIndex = priority;
  container.appendChild(prioritySelector);

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.classList.add("submit-btn");
  submitBtn.addEventListener("click", submitTodoForm);
  submitBtn.innerHTML = "Submit";
  container.appendChild(submitBtn);

  document.body.appendChild(container);
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
  loadTodoForm("None", "", "", "", 0, "");
};

//parameter to distinguish which one
const loadCurrentTodoForm = () => {};

const submitTodoForm = () => {
  const projectName = document.getElementById("proj").value;
  const name = document.getElementById("name").value;
  const notes = document.getElementById("note").value;
  const date = document.getElementById("date").value;
  console.log("date: ", date);
  const priority = document.getElementById("prior").value;

  const subList = [];
  const tasks = document.getElementById("task-container").childNodes;
  tasks.forEach((task) => {
    if (task.value) {
      subList.push(task.value);
    }
  });
  console.log({ projectName, name, notes, date, priority, subList });
  //TODO format these values to what things will be stored as
  //TODO add todo to that project

  deleteForm();
};

const newProject = () => {
  const input = document.getElementById("project-input");
  const name = input.value;
  if (name) {
    //Add project to project list
    //Add above new form
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
