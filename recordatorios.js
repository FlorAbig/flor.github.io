// app.js

// Función para manejar el evento de "Agregar" datos
document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
  
    // Capturar los datos ingresados por el usuario
    const hospital = document.getElementById('hospital').value;
    const consultationDate = document.getElementById('consultation-date').value;
    const consultationTime = document.getElementById('consultation-time').value;
    const userName = document.getElementById('user-name').value;
    const address = document.getElementById('address').value;
    const dui = document.getElementById('dui').value;
    const phone = document.getElementById('phone').value;
    const pressure = document.getElementById('pressure').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const glucose = document.getElementById('glucose').value;
    const reference1 = document.getElementById('reference1').value;
    const referencePhone1 = document.getElementById('reference-phone1').value;
    const referenceAddress1 = document.getElementById('reference-address1').value;
    const reference2 = document.getElementById('reference2').value;
    const referencePhone2 = document.getElementById('reference-phone2').value;
    const referenceAddress2 = document.getElementById('reference-address2').value;
    const medication = document.getElementById('medication').value;
    const frequency = document.getElementById('frequency').value;
    const reminder = document.getElementById('reminder').value;
    const allergy = document.getElementById('allergy').value;
  
    // Mostrar una alerta para confirmar que los datos fueron agregados
    alert('Datos agregados correctamente.');
  
    // Aquí podrías agregar la lógica para procesar los datos, como enviarlos a un servidor o almacenarlos localmente
    console.log({
      hospital,
      consultationDate,
      consultationTime,
      userName,
      address,
      dui,
      phone,
      pressure,
      weight,
      height,
      glucose,
      reference1,
      referencePhone1,
      referenceAddress1,
      reference2,
      referencePhone2,
      referenceAddress2,
      medication,
      frequency,
      reminder,
      allergy
    });
  
    // Opcional: Limpiar el formulario después de agregar los datos
    document.getElementById('task-form').reset();
  });
  
  // Función para manejar el guardado de datos (aquí puedes integrar tu lógica de base de datos o almacenamiento local)
  function saveData() {
    // Ejemplo de guardado de datos en localStorage
    alert('Los datos han sido guardados correctamente.');
  }
  