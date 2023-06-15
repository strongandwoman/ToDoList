const inputField = document.querySelector(".inputField");
const btn = document.querySelector(".btn");
const toDoContainer = document.querySelector(".toDoContainer");

btn.addEventListener("click", () => {
  const item = document.createElement("li");
  item.innerText = inputField.value;
  if (inputField.value.length === 0) {
    return false;
  }
  item.classList.add("addedItem");
  toDoContainer.appendChild(item);
  console.log(item);
  inputField.value = "";

  item.addEventListener("click", () => {
    item.classList.add("toDoComplited");
  });

  item.addEventListener("dblclick" || "taptwice", () => {
    toDoContainer.removeChild(item);
  });
});
