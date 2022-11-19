//объекты и наследование
//создание объекта 
const person  = new Object({
    name: 'Maxim',
    age: 25,
    greet: function() {
        console.log("Greet")
    }
})

//добавление к объекту функции(свойств) с помощью Object.prototype 
Object.prototype.sayHello = function() {
    console.log("Hello!")
}
//наследованного объекта
const Kena = Object.create(person)
//добавление в измененный объект свойств с наследованного объекта
Kena.name = 'Elena'

const str = new String('I am string')