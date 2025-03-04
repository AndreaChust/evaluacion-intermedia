"use strict"

const input = document.querySelector(".js-input");
const button = document.querySelector(".js-submit");
const text1 = document.querySelector(".js-text1");
const text2 = document.querySelector(".js-text2");
let accumulator = 0;

function getRandomNumber(max) { 
    return Math.ceil(Math.random() * max); 
    } 
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

const handleClick = (ev) => {
    ev.preventDefault();
    accumulator++; 
    const userNumber = parseInt(input.value);
    console.log(userNumber);
    if (input.value === "") { 
        text1.innerHTML = "El número debe estar entre 1 y 100";
        text2.innerHTML = `Número de intentos: ${accumulator}`;
    } else if (userNumber > 100) {
        text1.innerHTML = "El número debe estar entre 1 y 100";
        text2.innerHTML = `Número de intentos: ${accumulator}`;
    } else if (userNumber < 1) {
        text1.innerHTML = "El número debe estar entre 1 y 100";
        text2.innerHTML = `Número de intentos: ${accumulator}`;
    } else if (userNumber > randomNumber) {
        text1.innerHTML = "Demasiado alto";
        text2.innerHTML = `Número de intentos: ${accumulator}`;
    } else if (userNumber < randomNumber) {
        text1.innerHTML = "Demasiado bajo";
        text2.innerHTML = `Número de intentos: ${accumulator}`;
    } else if (userNumber === randomNumber) {
        text1.innerHTML = "¡¡¡Has ganado campeona!!!";
        text2.innerHTML = `Número de intentos: ${accumulator}`;
        accumulator = 0;
    } 
}

button.addEventListener("click", handleClick);
