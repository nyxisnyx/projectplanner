// app.js
import { addTask } from './taskManager.js';
import { toggleDarkMode } from './darkmode.js';
import { renderTask, loadTasks } from './taskManager.js';

const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);

function init() {

    document.getElementById("sort-alpha-btn").addEventListener("click", () => {
        renderSortedTasks('name');
    });

    document.getElementById("sort-due-date-btn").addEventListener("click", () => {
        renderSortedTasks('dueDate');
    });

    document.getElementById("clear-task-list-btn").addEventListener("click", () => {
        clearTaskList();
    });

    const addButton = document.getElementById("add-task-btn");
    addButton.addEventListener("click", () => {
        const taskName = document.getElementById("task-name").value;
        const taskDescription = document.getElementById("task-description").value;
        const dueDate = document.getElementById("due-date").value;
        const status = document.getElementById("status").value;

        const task = {
            name: taskName,
            description: taskDescription,
            dueDate: dueDate,
            status: status
        };

        addTask(task);
    });
}

init();

function renderSortedTasks(sortBy) {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ''; // Clear the task list before rendering

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    if (sortBy === 'name') {
        tasks.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'dueDate') {
        tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }

    tasks.forEach(task => {
        renderTask(task);
    });
}

export { renderSortedTasks};

function clearTaskList() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ''; // Efface la liste de tâches du DOM
    localStorage.removeItem('tasks'); // Supprime les données de tâches du local storage
}
