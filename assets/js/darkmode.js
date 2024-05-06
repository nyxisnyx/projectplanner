let toggleDarkMode = () => {
    let darkMode = JSON.parse(localStorage.getItem("darkMode"));

    // Items which must change when DM is toggled ON/ OFF
    const body = document.querySelector("body");
    const container = document.querySelector(".container");
    const taskForm = document.querySelector("task-form");
    const taskList = document.querySelector(".task-list"); 

    // Checks if dark theme is active
    if(!darkMode){
        //Removes dark theme elements
        body.classList.remove("dark-theme");
        container.classList.remove("dark-theme");
        taskForm.classList.remove("dark-theme");
        taskList.classList.remove("dark-theme");
        } else {
        // Adds dark theme elements
        body.classList.add("dark-theme");
        container.classList.add("dark-theme");
        taskForm.classList.add("dark-theme");
        taskList.classList.add("dark-theme");
    }
}