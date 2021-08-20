function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student5 = new Student("Andrey", "Efimenko", 27);
let student6 = new Student("Ivan", "Vinogradov", 28);
let student7 = new Student("Alena", "Batitskaya", 18);

// Првоеряем результат создания новых экземпляров Student
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
  console.log(mark);
  if (this.marks === undefined) { 
    this.marks = mark;
    } else {
    this.marks = this.marks.concat(mark);
    }
}

// Проверяем результат выполнение нового метода addMarks
student5.addMarks(4, 1, 1, 1, 4);
student6.addMarks(2, 3, 4, 7);
student7.addMarks(3, 3, 3);
console.log(student5.marks, student6.marks, student7.marks);
