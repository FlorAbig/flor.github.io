
import data from './data.json' assert { type: 'json' };

console.log(data);

let dailyBtn = document.querySelector('#daily');
let weeklyBtn = document.querySelector('#weekly');  // Corregido
let monthlyBtn = document.querySelector('#monthly');

let secondSection = document.querySelector('.second-section');

dailyBtn.addEventListener('click', () => {
    secondSection.innerHTML = '';  // Limpiar contenido previo
    data.forEach(element => {
        console.log(element);
        secondSection.innerHTML += `
        <div class="card">
          <div class="card__background">
            <img class="card__image" src="./images/icon-work.svg" alt="work icon">
          </div>
          <div class="card__details">
            <div class="card__activity">
              <p class="card__title">${element.title}</p>
              <img class="card__dots" src="./images/icon-ellipsis.svg" alt="three dots">
            </div>
            <div class="card__hours">
              <p class="card__hour">${element.timeframes.daily.current}hrs</p>
              <p class="card__previous">Previous - ${element.timeframes.daily.previous}hrs</p>
            </div>
          </div>
        </div>`;
    });
});
