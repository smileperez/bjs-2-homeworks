class AlarmClock {

    // Создаем конструктор класса будильников
    constructor () {
        this.alarmCollection = [];
        this.timerId = null;
    }
    
    // Создаем метод добавления будильников
    addClock(time, action, id) {

        // Создаем конструктор для создания звонков и дальнейшего их добавления в массив alarmCollection
        function AlarmConstructor(time, action, id) {
            this.time = time;
            this.action = action;
            this.id = id;
        }

        // Проверка на существования в запросе параметра ID
        if (id === undefined) throw new Error('В запросе отсутствует параметр ID');
		
        // Выполняем поиск по ID. Если такой ID уже существует, то прекращаем выполнение данного метода.
        if (this.alarmCollection.some(element => element = id)) {
            console.error('Будильник не добавлен. Будильник с таким ID уже существует');
        // Если ничего не нашли, добавляем новый будильник в коллекцию
        } else {
            this.alarmCollection.push(new AlarmConstructor(time, action, id));
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

    printAlarms() {
        //Проверка на существовнание хотя бы одного звонка
        if (this.alarmCollection.length === 0) {
            console.error(`Нет установленных будильников`);
            return;
        }

        //Печатаем все звонки
        console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}:`);
        this.alarmCollection.forEach((item, idx) => 
        console.log(`Будильник №${idx+1} заведен на время ${item.time}`));
    }

    getCurrentFormattedTime() {
        //Возвращаем текущее время в строковом формате HH:MM
        let currentTime = new Date;

        let hours = (currentTime.getHours() < 10) ? "0" + currentTime.getHours() : currentTime.getHours();
        let minuts = (currentTime.getMinutes() < 10) ? "0" + currentTime.getMinutes() : currentTime.getMinutes();

        return hours + ":" + minuts;
    }

    start() {
        let that = this;
        
        if (this.timerId === null) {
            console.log(`Текущего будильника нет. Задаем новый интервал.`);
            let interval = setInterval( () => {
                    
                    this.alarmCollection.forEach(item => checkClock(item));
                },
                    10000
                );
            
            this.timerId = interval;
        }

        // Функция проверки звонков на совпадение текущему времени
        function checkClock(item) {
            let currentTime = that.getCurrentFormattedTime();         
            if (currentTime === item.time) {
                console.log(item.action);
            }
        }

    }

    // Метод остановки будильников
    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            this.timerId = null;
            console.log(`Все будильники остановлены.`)
        }
    }

    // Метод остановки и удаления всех будильников
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
        console.log(`Все будильники удалены.`)
    }
}


const Alarm1 = new AlarmClock;