// taskManager.js

export function addTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTask(task);
}

export function renderTask(task) {
    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    const dueDate = new Date(task.dueDate);
    const today = new Date();
    const timeDifference = dueDate.getTime() - today.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    taskItem.innerHTML = `
        <h3>${task.name}</h3>
        <p>${task.description}</p>
        <p>Due Date: ${task.dueDate}</p>
        <p>Status: ${task.status}</p>
        <p>Time Remaining: ${daysDifference} days</p>
    `;
    taskList.appendChild(taskItem);
}

export function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        renderTask(task);
    });
}
