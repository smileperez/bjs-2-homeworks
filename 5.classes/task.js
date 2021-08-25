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
const book1 = new PrintEditionItem('Книга первая', 2019, 157);
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
const magazine1 = new Magazine('Журнал эротики', 1955, 33);
console.log(magazine1);

// Расширяем класс PrintEditionItem для производства книг Book
class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

// Проверяем корректность создания книги и наследования свойств
const book2 = new Book('Ефименко А.А.', 'Лучшая книга времен', 2021, 99);
console.log(book2);

// Создаем доп класс Novel
class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

// Создаем доп класс Fantastic
class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

// Создаем доп класс Detective
class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
} 


// ЗАДАЧА №2. Библиотека

// Создаем основной метод библиотеки
class Library {
    
    // Создаем базовый конструктор библиотеки
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    // Создаем метод addBook, который будет добавлять в библиотеку книгу только при "хорошем" состоянии
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);        
        }
    }

    // Создаем метод findBookBy для поиска книги
    findBookBy(key, value) {

        let findItem = null;                          // Зададим переменную с результатом поиска, по умолчанию null
        for (let i=0; i < this.books.length; i++) {   // Пройдемся циклом по всем книгам
            
            if (this.books[i][key] == value) {
                findItem = this.books[i].name;        // Запишем найденную книгу в переменную
                break;                                // Завершим цикл, если что-то нашли. 
            }                                         //  Если не нашли, то null так и останется в переменной $findItem
        }
        return findItem;
    }

    // Создаем метод giveBookByName для выдачи книги
    giveBookByName(bookName) {
        
        // Ищем книгу
        let findItem = null;                           // Зададим переменную с результатом поиска, по умолчанию null
        for (let i=0; i < this.books.length; i++) {    // Пройдемся циклом по всем книгам
            if (this.books[i].name === bookName) {
                findItem = this.books[i].name;         // Запишем найденную книгу в переменную
                this.books.splice(i, 1);               // Удалим из массива книгу под индексом [i]
                break;                                 // Выходим из цикла
            }
        }
        return findItem;
    }
}

// Создаем экземпляр библиотеки
const library2 = new Library("Библиотека имени Андрюхи Ефименко");

// Понасоздаем кучу экземляров печатных изданий
library2.addBook(
    new Book(
        'Ефименко А.А.',
        'Лучшая книга времен',
        2021,
        99
    )
)

library2.addBook(
    new Magazine(
        'Журнал эротики',
        1955,
        33
    )
)

library2.addBook(
    new Book(
        'Виноградов И.И.',
        'Третья книга',
        1999,
        645
    )
)

// Посмотрим всю библиотеку
console.log(library2);

// Проведем локальные тесты
console.log(library2.findBookBy("releaseDate", "1955")); // Результат "Журнал эротики"
console.log(library2.findBookBy("releaseDate", "1977")); // Результат null

console.log("Количество книг до выдачи: " + library2.books.length); //Количество книг до выдачи: 4
library2.giveBookByName("Третья книга");
console.log("Количество книг после выдачи: " + library2.books.length); //Количество книг после выдачи: 3
console.log(library2);
