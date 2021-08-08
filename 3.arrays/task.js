// Задача 3-1
function compareArrays(arr1, arr2) {
  // Сравнили длину массива - если не равны то выдать false, далее если длина одинаковая то сравниваем конкретные значения.
  return arr1.length == arr2.length && arr1.every((item, idx) => item === arr2[idx]);
}

// Задача 3-2
function advancedFilter(arr) {
  // Фильтр на положительные, следом фильтр на кратные, следом изменение в 10 раз.
  return arr.filter((item, idx) => item > 0).filter((item, idx) => item % 3 === 0).map((item, idx) => item * 10);
}
