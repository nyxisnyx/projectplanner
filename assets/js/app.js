// app.js
import { addTask } from './taskManager.js';
import { toggleDarkMode } from './darkmode.js';

// Function to toggle dark mode on or off
const toggleDarkMode = () => {
    // Check if dark mode is currently active
    const darkModeActive = localStorage.getItem("darkMode") === "true";

    // Invert the state of dark mode
    const newDarkModeState = !darkModeActive;

    // Set the new state of dark mode in localStorage
    localStorage.setItem("darkMode", newDarkModeState);

    // Update the appearance of the page based on the new state of dark mode
    updateDarkMode(newDarkModeState);
}

// Function to update the appearance of the page based on the state of dark mode
const updateDarkMode = (darkModeActive) => {
    // If dark mode is active, add the dark-theme class to the body, otherwise remove it
    const body = document.querySelector("body");
    if (darkModeActive) {
        body.classList.add("dark-theme");
    } else {
        body.classList.remove("dark-theme");
    }
}

// Check if dark mode is active on page load and update appearance accordingly
document.addEventListener("DOMContentLoaded", () => {
    const darkModeActive = localStorage.getItem("darkMode") === "true";
    updateDarkMode(darkModeActive);
});

// Add event listener to dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);



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