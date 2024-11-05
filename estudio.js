// app.js

// Referencias a los elementos
const taskForm = document.getElementById('task-form');
const assignedTasksInput = document.getElementById('assigned-tasks');

// Evento para agregar tareas asignadas a los combo boxes
taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const taskValue = assignedTasksInput.value; // Obtener el valor de la tarea asignada

    // Crear una nueva opción para "Tareas pendientes" y "Tareas realizadas"
    const newOptionPending = document.createElement('option');
    const newOptionCompleted = document.createElement('option');

    newOptionPending.value = taskValue;
    newOptionPending.textContent = taskValue;

    newOptionCompleted.value = taskValue;
    newOptionCompleted.textContent = taskValue;

    // Agregar la nueva opción a ambos selects
    // Asegúrate de que los select tengan sus IDs correctos antes de usar esto
    const pendingTasksSelect = document.getElementById('pending-tasks');
    const completedTasksSelect = document.getElementById('completed-tasks');

    pendingTasksSelect.appendChild(newOptionPending);
    completedTasksSelect.appendChild(newOptionCompleted);

    // Limpiar el campo de texto de la tarea asignada
    assignedTasksInput.value = '';
});

// Función para guardar los datos
function saveData() {
    alert('Los datos han sido guardados correctamente.');
    // Aquí puedes añadir la lógica para guardar los datos en una base de datos o localStorage
}
