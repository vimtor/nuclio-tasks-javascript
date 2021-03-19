const input = document.querySelector("input");
const form = document.querySelector("form");
const list = document.querySelector("ul");
const error = document.querySelector(".error");

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
  item.addEventListener("click", () => {
    list.removeChild(item);
    tasks = tasks.filter((task) => task !== title);
    localStorage.setItem("tasks", tasks);
  });

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

let tasks = getInitialTasks();

tasks.forEach(createItem);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value) {
    createItem(input.value);
    saveTask(input.value);
    clearInput();
    clearError();
  } else {
    setError("Your task cannot be empty");
  }
});
