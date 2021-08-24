// ЗАДАЧА №1. Печатное издание

// Создаем родительский класс всех печатных изданий
class PrintEditionItem {

    // Создаем базовый конструктор
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    // Делаем сеттер для правильного изменения значения state
    set state(state) {
        if (this.state <= 0) {
            this._state = 0;
        } else if (this.state >= 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    // Делаем геттер для правильного чтения значения state
    get state() {
        return this._state;
    }

    // Создаем метод починки печатных изданий
    fix() {
        this.state *= 1.5;
    }
}

// Создаем проверочное печатное издание, проверяем корректность создания
const book1 = new PrintEditionItem('Книга первая', '2019', 157);
console.log(book1);

// Создаем корректность сеттера и геттера
console.log(book1.state); // 100
book1.fix();
console.log(book1.state); // 100

// Расширяем класс PrintEditionItem для производства журналов Magazine
class Magazine extends PrintEditionItem {
    constructor (...args) {
        super(...args);
        this.type = 'magazine';
    }
}

// Проверяем корректность создания журнала и наследования свойств
const magazine1 = new Magazine('Журна эротики', '1955', 33);
console.log(magazine1);

// Расширяем класс PrintEditionItem для производства книг Book
class Book extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

// Проверяем корректность создания книги и наследования свойств
const book2 = new Book('Лучшая книга времен', '2021', 99, 'Ефименко А.А.');
console.log(book2);




// ЗАДАЧА №2. Библиотека