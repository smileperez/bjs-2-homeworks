// Создаем функцию конструктор для создания множества экземпляров студентов
function Student(name) {
  this.name = name;
  // this.gender = gender;
  // this.age = age;
}

// Сожаем новые экземпляры Student с помощью функции-конструктора
let student5 = new Student("Andrey Efimenko");
let student6 = new Student("Ivan Vinogradov");
let student7 = new Student("Alena Batitskaya");

// Проверяем результат создания новых экземпляров Student
console.log(student5, student6, student7);

// Создаем новый метод setSubject
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

// Проверяем результат выполнение нового метода setSubject
student5.setSubject("Theme 1");
student6.setSubject("Theme 2");
student7.setSubject("Theme 3");
console.log(student5, student6, student7);

// Создаем новый метод addMark
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) { 
    this.marks = [mark];
    } else {
    this.marks.push(mark);
    }
}

// Проверяем результат выполнение нового метода addMark
student5.addMark(4);
student5.addMark(5);
student5.addMark(3);
student6.addMark(2);
student6.addMark(3);
student6.addMark(2);
student7.addMark(2);
student7.addMark(2);
student7.addMark(2);
console.log(student5.marks, student6.marks, student7.marks);

// Создаем новый метод addMarks с REST параметром (mark1,mark2,mark3...)
Student.prototype.addMarks = function (...mark) {
  if (this.marks === undefined) { 
    this.marks = mark;
    } else {
    this.marks = this.marks.concat(mark);
    }
}

// Проверяем результат выполнение нового метода addMarks
student5.addMarks(4, 4, 4, 4, 4);
student6.addMarks(2, 3, 4, 3);
student7.addMarks(5, 5, 5);
console.log(student5.marks, student6.marks, student7.marks);

// Создаем новый метод getAverage 
Student.prototype.getAverage = function () {
  let average = 0;
  this.marks.forEach(item => average += item);
  return average/this.marks.length;
  // return Number(average/this.marks.length).toFixed(1); Так было бы конечно правильнее, но Jasmine хочет без toFixed
}

// Проверяем результат выполнение нового метода addMarks
console.log(student5.getAverage(), student6.getAverage(), student7.getAverage());

// Создаем новый метод exclude 
Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

// Проверяем результат выполнение нового метода exclude
student5.exclude("Неудачник");
student6.exclude("Прогульщик");
student7.exclude("Двоечница");
console.log(student5, student6, student7);