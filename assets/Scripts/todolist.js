document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('taskList');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskModal = document.getElementById('taskModal');
    const modalTitle = document.getElementById('modalTitle');
    const taskForm = document.getElementById('taskForm');
    const taskNameInput = document.getElementById('taskName');
    const taskDifficultyInput = document.getElementById('taskDifficulty');
    const submitTaskBtn = document.getElementById('submitTaskBtn');
    const closeBtn = document.querySelector('.close');

    addTaskBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);

    function openModal() {
        modalTitle.textContent = 'Agregar Tarea';
        taskForm.reset();
        taskModal.style.display = 'block';
    }

    function closeModal() {
        taskModal.style.display = 'none';
    }

    function outsideClick(e) {
        if (e.target === taskModal) {
            closeModal();
        }
    }

    taskForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const taskName = taskNameInput.value.trim();
        const taskDifficulty = taskDifficultyInput.value;

        if (taskName === '') {
            alert('Por favor, ingrese el nombre de la tarea.');
            return;
        }

        if (modalTitle.textContent === 'Agregar Tarea') {
            addTask(taskName, taskDifficulty);
        } else {
            editTask(taskName, taskDifficulty);
        }

        closeModal();
    });

    function addTask(name, difficulty) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${name}</span>
            <span>${difficulty}</span>
            <button onclick="editTaskHandler(this)">Editar</button>
            <button onclick="deleteTaskHandler(this)">Eliminar</button>
        `;
        taskList.appendChild(listItem);
    }

    window.editTaskHandler = function (button) {
        const taskItem = button.parentNode;
        const taskName = taskItem.querySelector('span:first-child').textContent;
        const taskDifficulty = taskItem.querySelector('span:nth-child(2)').textContent;

        modalTitle.textContent = 'Editar Tarea';
        taskNameInput.value = taskName;
        taskDifficultyInput.value = taskDifficulty;

        taskModal.style.display = 'block';

        // Elimina la tarea existente después de hacer clic en el botón de editar
        deleteTaskHandler(button);
    };

    window.deleteTaskHandler = function (button) {
        const taskItem = button.parentNode;
        taskList.removeChild(taskItem);
    };
});
