// taskManager.js

// Ajouter un écouteur d'événements pour les boutons de modification

document.getElementById("task-list").addEventListener("click", (event) => {
    const taskItem = event.target.closest('.task-item');
    if (taskItem && event.target.classList.contains('delete-task-btn')) {
        // Récupérer le nom de la tâche à supprimer
        const taskName = taskItem.querySelector('h3').textContent;
        
        // Supprimer la tâche
        deleteTask(taskName);

        // Mettre à jour l'affichage
        renderTaskList();
    }
});

function deleteTask(taskName) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.name !== taskName);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

document.getElementById("task-list").addEventListener("click", (event) => {
    const taskItem = event.target.closest('.task-item');
    if (taskItem && event.target.classList.contains('edit-task-btn')) {
        // Récupérer les détails de la tâche à modifier
        const taskName = taskItem.querySelector('h3').textContent;
        const taskDescription = taskItem.querySelector('p:nth-of-type(1)').textContent;
        const dueDate = taskItem.querySelector('p:nth-of-type(3)').textContent.split(": ")[1];
        const status = taskItem.querySelector('p:nth-of-type(4)').textContent.split(": ")[1];
        
        // Pré-remplir le formulaire de modification avec les détails de la tâche
        document.getElementById('edit-task-name').value = taskName;
        document.getElementById('edit-task-description').value = taskDescription;
        document.getElementById('edit-due-date').value = dueDate;
        document.getElementById('edit-status').value = status;

        document.getElementById('modal-container').style.display = 'block';

        // Stocker le nom de la tâche à modifier dans un attribut de données personnalisé
        const addButton = document.getElementById("add-task-btn");
        addButton.dataset.taskName = taskName;
    }
});

document.getElementById("close-modal-btn").addEventListener("click", () => {
    // Masquer la fenêtre modale
    document.getElementById('modal-container').style.display = 'none';
});

document.getElementById("save-task-btn").addEventListener("click", () => {
    // Récupérer les valeurs modifiées depuis la fenêtre modale
    const editedTaskName = document.getElementById('edit-task-name').value;
    const editedTaskDescription = document.getElementById('edit-task-description').value;
    const editedDueDate = document.getElementById('edit-due-date').value;
    const editedStatus = document.getElementById('edit-status').value;
    
    // Mettre à jour la tâche existante avec les nouvelles valeurs
    const task = {
        name: editedTaskName,
        description: editedTaskDescription,
        dueDate: editedDueDate,
        status: editedStatus
    };

    addTask(task);

    document.getElementById('modal-container').style.display = 'none';
});

// Modifier la fonction addTask(task) pour mettre à jour une tâche existante
export function addTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const existingTaskIndex = tasks.findIndex(item => item.name === task.name);
    
    if (existingTaskIndex !== -1) {
        // Mettre à jour la tâche existante
        tasks[existingTaskIndex] = task;
    } else {
        // Ajouter une nouvelle tâche si elle n'existe pas déjà
        tasks.push(task);
    } 

    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTaskList(); // Mise à jour de la liste des tâches
}


// Fonction pour afficher la liste des tâches
function renderTaskList() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ''; // Efface la liste de tâches actuelle

    tasks.forEach(task => {
        renderTask(task);
    });
}

export function renderTask(task) {
    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
<<<<<<< HEAD
    taskItem.classList.add(task.status);
    
    taskItem.classList.add(`status-${task.status}`);
=======
>>>>>>> bb4ec0990b9d48f722987834d24ba3ace34a65a5

    const dueDate = new Date(task.dueDate);
    const today = new Date();
    const timeDifference = dueDate.getTime() - today.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    taskItem.innerHTML = `
    <h3>${task.name}</h3>
    <p class="task-description">${task.description}</p>
    <p class="task-due-date">Due Date: ${task.dueDate}</p>
    <p class="task-status">Status: ${task.status}</p>
    <p>Time Remaining: ${daysDifference} days</p>
    <button class="edit-task-btn">Edit</button>
    <button class="delete-task-btn">Corbeille</button>
    `;
    taskList.appendChild(taskItem);
}

export function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        renderTask(task);
    });
}

document.getElementById("show-all-tasks-btn").addEventListener("click", () => {
    renderTaskList(); // Appel de la fonction pour afficher toutes les tâches
});

