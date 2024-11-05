
// Function to handle switching between daily, weekly, and monthly views
document.addEventListener('DOMContentLoaded', function() {
    const frequencyButtons = document.querySelectorAll('.main-card__frequency');
  
    frequencyButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove the active class from all buttons
        frequencyButtons.forEach(btn => btn.classList.remove('--active'));
        
        // Add the active class to the clicked button
        this.classList.add('--active');
  
        // Logic for updating the dashboard can go here
        console.log(`Cambiando a la vista ${this.id}`);
      });
    });
  });
  
  // Function to show the task form (not implemented in this example)
  function showTaskForm() {
    alert("Aquí aparecería el formulario para actualizar los detalles de la tarea.");
  }
  