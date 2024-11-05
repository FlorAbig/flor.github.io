// app.js

// Referencias a los elementos
const taskForm = document.getElementById('task-form');
const assignedTasksInput = document.getElementById('assigned-tasks');

// Evento para agregar tareas asignadas
taskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  const taskValue = assignedTasksInput.value; // Obtener el valor de la tarea asignada

  // Limpiar el campo de texto de la tarea asignada
  assignedTasksInput.value = '';
  alert('Tarea agregada correctamente');
});

// Función para guardar los datos
function saveData() {
  alert('Los datos han sido guardados correctamente.');
  // Aquí puedes añadir la lógica para guardar los datos en una base de datos o localStorage
}
