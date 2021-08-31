// ЗАДАЧА 1

// Создаем функцию парсинга
const parseCount = (parse) => {
    parse = Number.parseInt(parse);
    if (isNaN(parse) === true) throw new Error("Невалидное значение"); // Если NaN - то выдаем эксепшен
    return parse; // Если не NaN, то выдаем распарсенное выражение
}

// Создаем функцию валидации
const validateCount = (parse) => {
    try {
        return parseCount(parse);
    } catch(err) {
        return err;
    }
}



// ЗАДАЧА 2

// Создаем класс треугольника
class Triangle {
    // Конструктор создания треугольника с проверкой на валидность данных
    constructor (a, b, c) {
        if (a + b > c && a + c > b && b + c > a) {
            this.a = a;
            this.b = b;
            this.c = c;
        } else {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }
    // Метод получения периметра
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    // Метод получения площади по формуле Герона
    getArea() {
        let p = this.getPerimeter() / 2;
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(s.toFixed(3));
    }
}

// Функция создания треугольника
const getTriangle = (a, b, c) => {
    try {
        return new Triangle(a, b, c);
    } catch(err) {
        return {
           getPerimeter: function() { return "Ошибка! Треугольник не существует" },
           getArea: function() { return "Ошибка! Треугольник не существует" }
        }
    }
}
