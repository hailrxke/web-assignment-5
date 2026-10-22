const taskForm = document.getElementById("taskForm")
const taskList = document.getElementById("taskList")
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");

let tasks = []

taskForm.addEventListener("submit", function (event) {
    event.preventDefault()
    const title = taskTitle.value
    const description = taskDescription.value
    if (title === "" || description === "") {
        return
    }
    const newTask = {
        title: title,
        description: description,
        completed: false
    }

    tasks.push(newTask)
    taskForm.reset()
    renderTasks()
})

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const li = document.createElement("li");
        li.className = "task-item";

        if (task.completed) {
            li.classList.add("completed");
        }
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", function () {
            task.completed = checkbox.checked;
            renderTasks();
        });
        const content = document.createElement("div");
        content.className = "task-content";

        const title = document.createElement("h3");
        title.className = "task-title";
        title.textContent = task.title;

        const description = document.createElement("p");
        description.className = "task-description";
        description.textContent = task.description;
        content.appendChild(title);
        content.appendChild(description);
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function () {
            tasks.splice(index, 1);
            renderTasks();
        });

        li.appendChild(checkbox);
        li.appendChild(content);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}