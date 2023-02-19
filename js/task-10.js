// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', () => createBoxes(inputEl.value));
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    elements.push(divEl);
    size += 10;
  }

  boxesEl.append(...elements);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Цей скрипт зчитує значення з input, яке користувач вводить, 
// і за його допомогою викликає функцію createBoxes, 
// яка створює колекцію елементів div в div#boxes. 
// Розмір кожного елементу збільшується на 10px в порівнянні 
// з попереднім елементом. Колір фону елементів випадково 
// генерується за допомогою функції getRandomHexColor.

// Функція destroyBoxes очищає колекцію елементів div#boxes.