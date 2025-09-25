const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create li element
    const li = document.createElement("li");

    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;

    // ✅ Tick button
    const tickBtn = document.createElement("button");
    tickBtn.textContent = "✔";
    tickBtn.className = "tickBtn";
    tickBtn.addEventListener("click", function () {
        span.classList.toggle("done"); // Toggle strike-through
    });

    // ❌ Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delBtn";
    delBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    // Put everything together
    li.appendChild(span);
    li.appendChild(tickBtn);
    li.appendChild(delBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}
