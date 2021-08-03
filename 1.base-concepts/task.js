'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c; //Ищем дискриминант
  console.log(`Дискриминант равен = ${d}`);

  if (d < 0) {
    console.log(arr);
    return arr; // array
  } else if (d === 0) {
    arr.push(-b / (2 * a));
    console.log(arr);
  } else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
    console.log(arr);
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
