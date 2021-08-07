// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg;

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    
    // Определяем минимальное значение
    if (arr[i] < min) {
      min = arr[i];
    } 
    
    // Определяем максимальное значение
    if (arr[i] > max) {
      max = arr[i];
    }
    
    // Рассчитываем сумму массива
    sum = sum + arr[i];
  }

  // Рассчитываем среднее значение массива
  avg = Number((sum / arr.length).toFixed(2));
      
  return { min:min, max:max, avg:avg };
}



// Задание 2
function worker(arr) {
  let sum = 0;
  // Считаем сумму массива
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  // Проходим по массиву
  for (let i = 0; i < arrOfArr.length; i++) {
    // Выбираем наибольший массив
    if (func(arrOfArr[i]) > max) {
      max = (func(arrOfArr[i]));
    }
  }
  return max;
}



// Задание 3
function worker2(arr) {
  let maximum = -Infinity;
  let minimum = Infinity;
  let interval;
  // Проходим по массиву
  for (let i = 0; i < arr.length; i++) {
    // Выбираем максимальное значение массива
    if (arr[i] > maximum) {
      maximum = arr[i];
    }
    // Выбираем минимальное значение массива
    if (arr[i] < minimum) {
      minimum = arr[i];
    }
  }
  // Считаем расстояние между 
  interval = maximum - minimum;

  return interval;
}
