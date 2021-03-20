const input = document.querySelector("input");
const form = document.querySelector("form");
const list = document.querySelector("ul");
const error = document.querySelector(".error");
const pending = document.querySelector("span");

function getInitialTasks() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    return storedTasks.split(",");
  }
  return [];
}

function createItem(title) {
  const item = document.createElement("li");
  item.innerText = title;
  list.append(item);
}

function clearInput() {
  input.value = "";
  input.focus();
}

function setError(message) {
  error.innerText = message;
}

function clearError() {
  error.innerText = "";
}

function saveTask(title) {
  tasks.push(title);
  localStorage.setItem("tasks", tasks);
}

function updatePendingTasks() {
  pending.innerText = tasks.length;
}

function removeItem(item) {
  list.removeChild(item);
  const items = document.querySelectorAll("li");
  const newTasks = [];
  items.forEach((item) => newTasks.push(item.innerText));
  tasks = newTasks;
  localStorage.setItem("tasks", tasks);
}

let tasks = getInitialTasks();

tasks.forEach(createItem);

updatePendingTasks();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value) {
    createItem(input.value);
    saveTask(input.value);
    clearInput();
    clearError();
    updatePendingTasks();
  } else {
    setError("Your task cannot be empty");
  }
});

list.addEventListener("click", (event) => {
  removeItem(event.target);
  updatePendingTasks();
});
