// app.js

import { addTask } from './taskManager.js';
import { toggleDarkMode } from './darkmode.js';

//Function to activate dark mode
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    toggleDarkMode();
});

function init() {
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
