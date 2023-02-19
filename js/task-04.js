const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let currentValue = 0;

decrementBtn.addEventListener("click", () => {
  currentValue -= 1;
  counterValue.textContent = currentValue;
});

incrementBtn.addEventListener("click", () => {
  currentValue += 1;
  counterValue.textContent = currentValue;
});


// Знаходимо в DOM елементи, з якими будемо працювати за допомогою методу
//  document.querySelector.
// Ініціалізуємо змінну currentValue початковим значенням 0.
// Додаємо слухачів подій до кнопок. При кліку на кнопку "мінус 1" 
// зменшуємо змінну currentValue на 1, а при кліку на кнопку "плюс 1" 
// збільшуємо змінну currentValue на 1.
// Оновлюємо текстовий вміст елементу counterValue змінною currentValue.