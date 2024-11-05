// app.js

// Referencias a los elementos del primer apartado
const taskForm = document.getElementById('task-form');
const assignedTasksInput = document.getElementById('assigned-tasks');

// Referencias a los elementos del segundo apartado
const pendingTasksSelect = document.getElementById('pending-tasks');
const completedTasksSelect = document.getElementById('completed-tasks');

// Evento para agregar tareas asignadas al primer apartado
taskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  const taskValue = assignedTasksInput.value; // Obtener el valor de la tarea asignada

  // Crear una nueva opción para "Trabajos pendientes" y "Trabajos realizados"
  const newOptionPending = document.createElement('option');
  const newOptionCompleted = document.createElement('option');

  newOptionPending.value = taskValue;
  newOptionPending.textContent = taskValue;

  newOptionCompleted.value = taskValue;
  newOptionCompleted.textContent = taskValue;

  // Agregar la nueva opción a ambos selects
  pendingTasksSelect.appendChild(newOptionPending);
  completedTasksSelect.appendChild(newOptionCompleted);

  // Limpiar el campo de texto de la tarea asignada
  assignedTasksInput.value = '';
});

// Función para guardar los datos del primer apartado
function saveData() {
  alert('Los datos del primer apartado se han guardado correctamente.');
  // Aquí puedes añadir la lógica para guardar los datos en una base de datos o localStorage
}

// Función para agregar una tarea pendiente (segundo apartado)
function addPendingTask() {
  const newTask = prompt('Ingresa una nueva tarea pendiente:');
  if (newTask) {
    const newOption = document.createElement('option');
    newOption.value = newTask;
    newOption.textContent = newTask;
    pendingTasksSelect.appendChild(newOption);
  }
}

// Función para guardar el estado de los trabajos en el segundo apartado
function saveTasksStatus() {
  alert('Los trabajos pendientes y realizados se han guardado correctamente.');
  // Aquí puedes añadir la lógica para guardar los datos en una base de datos o localStorage
}
