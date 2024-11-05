import data from './data.json' assert { type: 'json' };

// Datos simulados para cada frecuencia
const simulatedData = {
    daily: {
        Trabajo: { hours: 32, previous: 36 },
        Juegos: { hours: 10, previous: 8 },
        Estudio: { hours: 4, previous: 7 },
        Ejercicio: { hours: 4, previous: 5 },
        CuidadoPersonal: { hours: 2, previous: 2 },
        HorasLibres: { hours: 7, previous: 2 }
    },
    weekly: {
        Trabajo: { hours: 160, previous: 180 },
        Juegos: { hours: 50, previous: 40 },
        Estudio: { hours: 20, previous: 35 },
        Ejercicio: { hours: 10, previous: 12 },
        CuidadoPersonal: { hours: 14, previous: 10 },
        HorasLibres: { hours: 30, previous: 20 }
    },
    monthly: {
        Trabajo: { hours: 640, previous: 720 },
        Juegos: { hours: 200, previous: 160 },
        Estudio: { hours: 80, previous: 120 },
        Ejercicio: { hours: 40, previous: 50 },
        CuidadoPersonal: { hours: 60, previous: 40 },
        HorasLibres: { hours: 100, previous: 80 }
    }
};

console.log(data);

let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');
let monthlyBtn = document.querySelector('#monthly');

let secondSection = document.querySelector('.second-section');

function renderCards(frequency) {
    secondSection.innerHTML = '';  // Limpiar contenido previo
    Object.keys(simulatedData[frequency]).forEach(title => {
        const { hours, previous } = simulatedData[frequency][title];
        secondSection.innerHTML += `
        <div class="card">
          <div class="card__background">
            <img class="card__image" src="./images/icon-work.svg" alt="work icon">
          </div>
          <div class="card__details">
            <div class="card__activity">
              <p class="card__title">${title}</p>
              <img class="card__dots" src="./images/icon-ellipsis.svg" alt="three dots">
            </div>
            <div class="card__hours">
              <p class="card__hour">${hours}hrs</p>
              <p class="card__previous">Anterior - ${previous}hrs</p>
            </div>
          </div>
        </div>`;
    });
}

dailyBtn.addEventListener('click', () => {
    renderCards('daily');
});

weeklyBtn.addEventListener('click', () => {
    renderCards('weekly');
});

monthlyBtn.addEventListener('click', () => {
    renderCards('monthly');
});