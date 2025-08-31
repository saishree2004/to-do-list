function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") return;

  let li = document.createElement("li");
  li.textContent = taskInput.value;

  // Toggle complete on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.onclick = (e) => {
    e.stopPropagation(); // prevent toggle when deleting
    li.remove();
  };

  li.appendChild(delBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
