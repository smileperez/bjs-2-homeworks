'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c; //Ищем дискриминант
  console.log(`Дискриминант равен = ${d}`);

  if (d < 0) {
    return arr; // выводим из функции пустой массив при d < 0
  } else if (d === 0) {
    arr.push(-b / (2 * a));
    return arr; // выводим из функции массив с одним значением X при d = 0
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
    return arr; // выводим из функции массив с двумя значениями X при d > 0
  } else {
    console.log(`Произошла ошибка`);
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
