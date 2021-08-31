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
class Triangle {

    constructor (a, b, c) {
        if (a + b > c && a + c > b && b + c > a) {
            this.a = a;
            this.b = b;
            this.c = c;
        } else {
            throw new Error("Треугольник с такими сторонами не существует")
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let p = this.getPerimeter() / 2;
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(s.toFixed(3));
    }
}

const getTriangle = (a, b, c) => {

}
