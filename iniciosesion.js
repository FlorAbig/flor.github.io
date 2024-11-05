// Función para cambiar entre visualización diaria, semanal y mensual
const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

daily.addEventListener('click', function() {
  setActiveFrequency(daily);
});

weekly.addEventListener('click', function() {
  setActiveFrequency(weekly);
});

monthly.addEventListener('click', function() {
  setActiveFrequency(monthly);
});

function setActiveFrequency(element) {
  // Remover la clase activa de todas las opciones
  daily.classList.remove('--active');
  weekly.classList.remove('--active');
  monthly.classList.remove('--active');

  // Agregar la clase activa al elemento seleccionado
  element.classList.add('--active');
}

// Función para mostrar el formulario de tareas (puedes adaptarlo si tienes un formulario específico)
function showTaskForm() {
  // Si tienes un formulario oculto para tareas, puedes mostrarlo aquí
  const taskForm = document.getElementById('form-section');
  if (taskForm) {
    taskForm.style.display = 'flex';
  }
}
