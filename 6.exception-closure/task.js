// ЗАДАЧА 1

// Создаем функцию парсинга
const parseCount = (parse) => {
    parse = Number.parseInt(parse);
    if (isNaN(parse) === true) throw new Error("Невалидное значение"); // Если NaN - то выдаем эксепшен
    return parse; // Если не NaN, то выдаем распарсенное выражение
}

// Создаем функцию валидации
const validateCount = () => {

}



// ЗАДАЧА 2