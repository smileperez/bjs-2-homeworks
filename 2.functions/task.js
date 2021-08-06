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
      console.log(`min теперь ${arr[i]}`);
    } 
    
    // Определяем максимальное значение
    if (arr[i] > max) {
      max = arr[i];
      console.log(`max теперь ${arr[i]}`);
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
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max

  // Ваш кода
  // for ...
  
  return max
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
