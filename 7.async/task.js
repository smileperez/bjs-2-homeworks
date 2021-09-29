class AlarmClock {

    // Создаем конструктор класса будильников
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }

    // Создаем метод добавления будильников
    addClock(time, action, id) {

        // Создаем конструктор для создания звонков и дальнейшего их добавления в массив alarmCollection
        function AlarmConstructor(id, time, callback) {
            this.id = id;
            this.time = time;
            this.action = action;
        }

        // Проверка на существования в запросе параметра ID
        if (arguments[2] === undefined) throw new Error('В запросе отсутствует параметр ID');
		
        // Выполняем поиск по ID. Если такой ID уже существует, то прекращаем выполнение данного метода.
        let searchID = 0;
        for (let i = 0; i < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i].id === id) {
                searchID++;
                console.error('Будильник не добавлен. Будильник с таким ID уже существует');
                return;
            }
        }
        
        // Если ничего не нашли, добавляем новый будильник в коллекцию
        if (searchID === 0) {
            this.alarmCollection.push(new AlarmConstructor(id, time, action));
        }

    }

    removeClock(id) {
        // Выполняем поиск по ID. Если такой ID существует, то удаляем будильник, иначе - завершаем метод.
        let searchID = 0;
        for (let i = 0; i < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i].id === id) {
                searchID++;
                this.alarmCollection = this.alarmCollection.filter(item => item.id !== id);
                console.log('Будильник успешно удален');
            }
        }
        
        // Если ничего не нашли, выдаем ошибку и выходим из метода
        if (searchID === 0) {
            console.error('Будильника с таким ID не существует');
            return;
        }
    }
}


const Alarm1 = new AlarmClock;
console.log(Alarm1);

Alarm1.addClock("20:48", "Alarm", 1);
console.log(Alarm1);

Alarm1.addClock("20:49", "CHEK", 2);
console.log(Alarm1);

Alarm1.addClock("20:50", "CHEK2", 2);
console.log(Alarm1);

Alarm1.addClock("21:49", "TRAX", 3);
console.log(Alarm1);

Alarm1.removeClock(4);
console.log(Alarm1);