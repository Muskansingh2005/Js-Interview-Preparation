const inputValue = document.getElementById("inputValue");
const addTaskBtn = document.getElementById("AddTask");
const taskList = document.getElementById("TaskList");

let tasks = [];

// Load tasks from localStorage on page load
if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
}

addTaskBtn.addEventListener("click", () => {
  const task = inputValue.value.trim();

  if (task === "") return;

  tasks.push({
    text: task,
    completed: false,
  });
JSON.stringify(tasks);
localStorage.setItem("tasks", JSON.stringify(tasks));
  inputValue.value = "";
  renderTasks();
});

const renderTasks = () => {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerText = task.text;

    // ✅ Apply style based on state
    if (task.completed) {
      li.style.textDecoration = "line-through";
    }

    // ✅ Toggle task
    li.addEventListener("click", () => {
      toggleTask(index);
    });

    // ✅ Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    deleteButton.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent toggle
      deleteTask(index);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  renderTasks();
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const toggleTask = (index) => {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
