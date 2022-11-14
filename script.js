let car = {
    color: 'orange',
    engine: 21,
    brand: 'toyota',
    drive() {
        console.log('driving');
    }, 
    park() {
        console.log('parking');
    },
    start() {
        console.log('starting');
    },
    stop() {
        console.log('stoping');
    },
    drive: {
        name: 'Александр',
        lastName: 'Василий',
        old: 21,
        category: 'Высокая'
    }
}
console.log(car);
car.drive.name = 'Владимир';
for(let key in car) {
    console.log(key);
}
delete car.drive.lastName;
console.log(car.drive);
if('model' in car == false) {
    console.log('Свойство отсутствует')
} else {
    console.log(model);
}
for(let key in car.drive) {
    console.log(key);
}
//11- не понимаю как
car.drive2 = {
    name: 'Сергей',
    category:'Средняя'
}
console.log(car);
drive2 ='drive2';
console.log(drive2);