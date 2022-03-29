// ЗАДАЧА 1

function cachingDecoratorNew(func) {
  
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(","); // получаем правильный хэш
    console.log(`Принимаем новую порцию хеша: ${hash}`);
    console.log(`Текущий размер кеша: ${cache.length}`);

    let idx = cache.findIndex((item) => item.hash === hash) // ищем элемент, хэш которого равен нашему хэшу
    
    if (idx !== -1 ) { // если элемент найден
      console.log(`Найден кеш. Результат из кэша: ${cache[idx].result}`)// индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + cache[idx].result;
    } else {
      console.log(`В кэше результата нет - придётся считать`);
      let result = func(...args); // в кэше результата нет - придётся считать
      cache.push({hash, result}); // добавляем элемент с правильной структурой
      console.log(`Производим вычисление: ${result}`);
      console.log("Добавляем вычисленный результат в кеш");
      
      if (cache.length > 5) { 
        cache.splice(0, 1); // если слишком много элементов в кэше надо удалить самый старый (первый)
        console.log("Кеш переполнен, удаляем самый старый кеш")
      }
      return "Вычисляем: " + result;  
    }
  }
  
  return wrapper;
}


// ЗАДАЧА 2

function debounceDecoratorNew(func, ms) {
    let timeout;
    let time = Date.now();

    return function (...args) {
    
        clearTimeout(timeout);
        
        timeout = setTimeout(() => {
            timeout = null;
            func.apply(this, args);
            console.log(Date.now() - time + " мс");
        }, ms);

    };
}



// ЗАДАЧА 3

// function debounceDecorator2(func) {
//   // Ваш код
// }
