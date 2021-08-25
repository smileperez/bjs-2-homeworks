// ЗАДАЧА №1. Печатное издание

// Создаем родительский класс всех печатных изданий
class PrintEditionItem {

    // Создаем базовый конструктор
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 31;
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
    constructor (name, releaseDate, pagesCount, author) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

// Проверяем корректность создания книги и наследования свойств
const book2 = new Book('Лучшая книга времен', 2021, 99, 'Ефименко А.А.');
console.log(book2);




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
const library = new Library("Библиотека имени Андрюхи Ефименко");

// Понасоздаем кучу экземляров печатных изданий
library.addBook(
    new Book(
        'Лучшая книга времен',
        2021,
        99,
        'Ефименко А.А.'
    )
)

library.addBook(
    new Magazine(
        'Журнал эротики',
        1955,
        33
    )
)

library.addBook(
    new Book(
        'Третья книга',
        1999,
        645,
        'Виноградов И.И.'
    )
)

// Посмотрим всю библиотеку
console.log(library);

// Проведем локальные тесты
console.log(library.findBookBy("releaseDate", "1955")); // Результат "Журнал эротики"
console.log(library.findBookBy("releaseDate", "1977")); // Результат null

console.log("Количество книг до выдачи: " + library2.books.length); //Количество книг до выдачи: 4
library2.giveBookByName("Третья книга");
console.log("Количество книг после выдачи: " + library2.books.length); //Количество книг после выдачи: 3
console.log(library2);


// ЗАДАЧА №3. Журнал успеваемости

// Создаем класс описывающий студентов
class Student {
    constructor(name) {
        this.name = name;
        this.gradebook = [];
        // this.gender = gender;
        // this.age = age;
    }

    // setSubject(subjectName) {
    //     this.subject = subjectName;
    // }

    addMark(mark, subjectName) { // Переделать
        

        this.gradebook.push(subjectName);
    

        // if (this.marks === undefined) { 
        //   this.marks = [mark];
        // } else {
        //   this.marks.push(mark);
        // }
    }

    // Не актуальный для задачи метод.
    // addMarks(...mark) {
    //     if (this.marks === undefined) { 
    //       this.marks = mark;
    //     } else {
    //       this.marks = this.marks.concat(mark);
    //     }
    // }

    // getAverage() {
    //     let average = 0;
    //     this.marks.forEach(item => average += item);
    //     return average/this.marks.length;
    //     // return Number(average/this.marks.length).toFixed(1); Так было бы конечно правильнее, но Jasmine хочет без toFixed
    // }

    exclude(reason) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
    }
}
  
// Создаем новые экземпляры Student с помощью функции-конструктора
const student5 = new Student("Andrey Efimenko");
const student6 = new Student("Ivan Vinogradov");
const student7 = new Student("Alena Batitskaya");
  
//  Проверяем результат выполнение метода setSubject
//  student5.setSubject("Theme 1");
//  student6.setSubject("Theme 2");
//  student7.setSubject("Theme 3");
//  console.log(student5, student6, student7);
  
  // Проверяем результат выполнение метода addMark
  student5.addMark(4, "Algebra");
  student6.addMark(5, "Geometry");
  student7.addMark(3, "History");
  console.log(student5, student6, student7);
  console.log(student5.gradebook, student6.gradebook, student7.gradebook);
  
//  Не актуальный для данной задачи тест метода
//  Проверяем результат выполнение метода addMarks
//  student5.addMarks(4, 4, 4, 4, 4);
//  student6.addMarks(2, 3, 4, 3);
//  student7.addMarks(5, 5, 5);
//  console.log(student5.marks, student6.marks, student7.marks);
  
// Проверяем результат выполнение нового метода getAverage
// console.log(student5.getAverage(), student6.getAverage(), student7.getAverage());
  
// Проверяем результат выполнение нового метода exclude
student5.exclude("Неудачник");
student6.exclude("Прогульщик");
student7.exclude("Двоечница");
console.log(student5, student6, student7);
