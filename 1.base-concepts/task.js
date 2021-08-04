// 'use strict'; // Активируем строгий режим

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c; // Ищем дискриминант квадратного уравнения
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
    console.log(`Произошла ошибка`); // На всякий случай оставляем вывод ошибки
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  
  // ПРОВЕРКА ВВЕДЕННЫХ ЗНАЧЕНИЙ
  if (isNaN(Number(percent)) == true || isNaN(Number(contribution)) == true || isNaN(Number(amount)) == true) {
    console.log(`Ошибка! Введены не корректные данные!`);
    if (isNaN(Number(percent)) == true) {
      console.log(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
    } else if (isNaN(Number(contribution)) == true) {
      console.log(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
    } else if (isNaN(Number(amount)) == true) {
      console.log(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
    }
  } else {
    // ПРИВОДИМ ТИПЫ ДАННЫХ В ПОРЯДОК
    percent = Number(percent);
    contribution = Number(contribution);
    amount = Number(amount);
     
    // СЧИТАЕМ ОБЩИЙ СРОК ИПОТЕКИ В МЕСЯЦАХ
    let currentDate = new Date(); // Текущая дата
    let creditTerm; // Срок импотеки в месяцах

    // Функция получения срока ипотеки между текущей датой и датой окончания ипотеки (количество месяцев)
    function calcCreditTerm(nowDate, targetDate) {
      let term1 = 11 - nowDate.getMonth(); // Кол-во месяцев от сегодня до конца текущего года
      let term2 = (targetDate.getFullYear() - nowDate.getFullYear() - 1) * 12; // Кол-во месяцев в полных годах
      let term3 = targetDate.getMonth() + 1; // Кол-во месяцев от начала года, до конца срока ипотеки

      if (targetDate < nowDate) { // Проверка на глупость
        console.log(`Ошибка!Конечная дата ипотеки не может быть раньше сегодняшней даты!`)

      } else if (targetDate.getFullYear() - nowDate.getFullYear() === 0) { // Кол-во месяцев, если все происходит внутри одного календарного года
        creditTerm = targetDate.getMonth() - nowDate.getMonth();
        console.log(`Всего месяцев до конца ипотеки: ${creditTerm}`)

      } else if (targetDate.getFullYear() - nowDate.getFullYear() === 1) { // Кол-во месяцев, если все происходит внутри двух календарных лет
        creditTerm = term1 + term3;
        console.log(`Всего месяцев до конца ипотеки: ${creditTerm}`)

      } else if (targetDate.getFullYear() - nowDate.getFullYear() > 1) { // Кол-во месяцев, если все срок больше календарных 2 лет
        creditTerm = term1 + term2 + term3;
        console.log(`Всего месяцев до конца ипотеки: ${creditTerm}`)
      }
      return creditTerm;
    }

    // СЧИТАЕМ ОБЩИЙ СРОК ИПОТЕКИ В МЕСЯЦАХ
    calcCreditTerm(currentDate, date); 
      
    // СЧИТАЕМ ОБЩУЮ СУММУ КРЕДИТА
    let totalAmount; // Общая сумма, которую заплатит Клиент

    if (contribution >= amount) { // Проверяем, а не хочет ли Клиент протупить и дать первую сумму равной сумме кредита?
      totalAmount = 0;
      console.log(`Полная стоимость кредита: ${totalAmount}`)
      return totalAmount;

    } else {
      let loanBody = amount - contribution; // Тело кредита
      let paymentPerMonth; // Платеж в месяц
      let percentPerMonth; // Процентная ставка в месяц

      // Считаем процентную ставку в месяц
      percentPerMonth = percent / 100 / 12;

      // Считаем платеж в месяц
      paymentPerMonth = loanBody * (percentPerMonth + percentPerMonth / (((1 + percentPerMonth) ** creditTerm) - 1));
      paymentPerMonth = paymentPerMonth;
      console.log(`Платеж в месяц: ${paymentPerMonth}`);

      // Считаем общую сумму кредита
      totalAmount = paymentPerMonth * creditTerm;
      totalAmount = Number(totalAmount.toFixed(2));
      console.log(`Полная стоимость кредита: ${totalAmount}`)

      return totalAmount;
    } 
  }
}
