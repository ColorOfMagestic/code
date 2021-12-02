'use strict';

const container = document.querySelector('.container');
const input = document.querySelector('input');
const buttonCheck = document.querySelector('.btn-check');
const buttonNew = document.querySelector('.btn-new');
const numsOut = document.querySelector('.numbers');
const out = document.querySelector('.out');
const attempt = document.querySelector('.attempt');

let trial = 10;

input.value = '';
numsOut.textContent = ' ';
buttonCheck.disabled = true;
out.textContent = 'Введите число';
attempt.textContent = `Число попыток ${trial}`;

input.addEventListener('keypress', function (e) {
    if (e.keyCode < 48 || e.keyCode > 58) {
        e.preventDefault();
    }
});

// Создание случайного числа

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let secretNumber;
secretNumber = getRandomInRange(1, 100);

let numbers = [];
function noEmptyInput() {
    if (input.value !== '') {
        buttonCheck.disabled = false;
        numbers.push(input.value);
        numsOut.textContent = numbers;
    }
}

input.addEventListener('change', noEmptyInput);

// Проверка числа
buttonCheck.addEventListener('click', function () {
    console.log(input.value === '');

    if (input.value < secretNumber) {
        out.textContent = `Введите число побольше`;
        input.value = '';
    } else if (input.value > secretNumber) {
        out.textContent = `Введите число поменьше`;
        input.value = '';
    } else if (input.value == secretNumber) {
        input.classList.add('winner');
        out.textContent = `Вы угадали! Вы молодец!!!`;
    }
    trial--;
    if (trial == 0) {
        buttonCheck.disabled = true;
        out.textContent = 'Вы проиграли! Начните заново';
    }
    attempt.textContent = `Число попыток ${trial}`;
});

// Игра сначала

buttonNew.addEventListener('click', function () {
    input.classList.remove('winner');
    input.focus();
    secretNumber = getRandomInRange(0, 100);
    input.value = '';
    numsOut.textContent = ' ';
    out.textContent = 'Введите число';
    trial = 10;
    attempt.textContent = `Число попыток ${trial}`;
    buttonCheck.disabled = false;
});
