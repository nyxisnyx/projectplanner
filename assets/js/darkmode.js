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
    const icon = document.getElementById("icon");
    if (darkModeActive) {
        body.classList.add("dark-theme");
        icon.src = "assets/img/sun.png";
    } else {
        body.classList.remove("dark-theme");
        icon.src = "assets/img/moon.png";
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

// Export the toggleDarkMode function
export { toggleDarkMode };