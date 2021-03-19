const input = document.querySelector("input");
const form = document.querySelector("form");
const list = document.querySelector("ul");

function addItem(newValue) {
  const item = document.createElement("li");
  item.innerText = newValue;
  list.append(item);
}

function clearInput() {
  input.value = "";
  input.focus();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value) {
    addItem(input.value);
    clearInput();
  }
});
