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

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

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


// ЗАДАЧА №3. Журнал успеваемости

console.log(`//////// НАЧАЛО ЗАДАЧИ 3 ///////////`);

// Создаем класс описывающий студентов
class Student {
    constructor(name) {
        this.name = name;
        this.gradebook = [];
        // this.gender = gender;
        // this.age = age;
    }

    addMark(mark, subjectName) { // Переделать

        if (mark < 1 || mark > 5) {
            console.log(`Ошибка, оценка должна быть числом от 1 до 5, а у вас ${mark}`)
        } else {

            // Проверка на пустой массив. Если массив пустой, то смело запишем нашу оценку к предмету
            if (this.gradebook.length == 0) {
                this.gradebook = [{subjectName: subjectName, marks: [mark]}];
                console.log(`Массив был пустой. Создали первый предмет [0] ${subjectName} в массиве и записали оценку ${mark}.`);
            } else {
            // Массив не пустой, поэтому нужно проверить наличие предмета
                
            let searchSubject;
            
            for (let i = 0; i < this.gradebook.length; i++) {
                if (this.gradebook[i].subjectName === subjectName) {
                    searchSubject = i;
                    console.log(`Поиск предмета ${subjectName}: найден под индексом [${searchSubject}].`);
                    break;
                } else {
                    searchSubject = false; 
                }
            }

            if (searchSubject === false) {
                this.gradebook.push({subjectName: subjectName, marks: [mark]});
                console.log(`Поиск предмета ${subjectName}: не найден.`);
                console.log(`Массив не пустой, но и предмета ${subjectName} в массиве нет.`);
                console.log(`Создали предмет ${subjectName} в массиве и записали оценку ${mark}`);
            } else {
                this.gradebook[searchSubject].marks.push(mark);
                console.log(`Массив не пустой. Нашли предмет [${searchSubject}] ${subjectName}. Добавили дополнительную оценку ${mark}`);
                console.log(`Текущие оценки предмета ${subjectName}: [${this.gradebook[searchSubject].marks}]`);
            }

        


                // for (let i = 0; i < this.gradebook.length; i++) {
                //     if (this.gradebook[i].subjectName === subjectName) {
                //         searchSubject = i;
                //         this.gradebook[i].marks.push(mark);
                //         console.log(`Массив не пустой. Нашли предмет [${searchSubject}] ${subjectName}. Добавили дополнительную оценку ${mark}`);
                //         console.log(`Текущие оценки предмета ${subjectName}: [${this.gradebook[i].marks}]`);
                //         break;
                //     } else {
                //         this.gradebook.push({subjectName: subjectName, marks: [mark]});
                //         console.log(`Массив не пустой. Но в массиве нет запрашиваемого предмета ${subjectName}.`);
                //         console.log(`Создали предмет [${i}] ${subjectName} в массиве и записали оценку ${mark}`);
                //     }
                // }
            }
        }

        // console.log(student5);

        // console.log(searchSubject);

    }

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
  
// Проверяем результат выполнение метода addMark
student5.addMark(5, "Algebra");
student5.addMark(3, "Algebra");
student5.addMark(3, "History");
student5.addMark(4, "History");
student5.addMark(3, "Algebra");
student5.addMark(5, "History");
student5.addMark(3, "Algebra");
student5.addMark(4, "Algebra");
student5.addMark(5, "History");
// student6.addMark(4, "Algebra");
// student7.addMark(5, "Geometry");
console.log(student5);
console.log(student5.gradebook);
console.log(`//////// КОНЕЦ ЗАДАЧИ 3 ///////////`);
//  Не актуальный для данной задачи тест метода
//  Проверяем результат выполнение метода addMarks
//  student5.addMarks(4, 4, 4, 4, 4);
//  student6.addMarks(2, 3, 4, 3);
//  student7.addMarks(5, 5, 5);
//  console.log(student5.marks, student6.marks, student7.marks);
  
// Проверяем результат выполнение нового метода getAverage
// console.log(student5.getAverage(), student6.getAverage(), student7.getAverage());
  
// Проверяем результат выполнение нового метода exclude
// student5.exclude("Неудачник");
// student6.exclude("Прогульщик");
// student7.exclude("Двоечница");
// console.log(student5, student6, student7);
