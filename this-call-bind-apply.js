function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Vladilen',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(document), //возращает новую функцию(bind) this относительно объекта на любое другое (document, window, this)
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`) //${this.name} == ${person.name} но для уникальности используем this
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Job is ${phone}`)
        console.groupEnd()
    }
}

const Lena = {
    name: 'Elena',
    age: 23,
}

// const fnLenaInfoLog = person.logInfo.bind(Lena, 'Frontend', '954583429')()// .bind сам себя не может вызвать, поэтому пишем доп.()
//person.logInfo.call(Lena,'Frontend', '954583429')// .call сразу себя вызывает
person.logInfo.apply(Lena, ['Frontend', '954583429']) //в .apply принимается 1 - это объект в контексте, кот. он был вызван и 2. - это массив

//===

const array = [1,2,3,4,5]

function multBy2(arr, n) {
    return arr.map(function(i){
        return i * n
    })
}
console.log(multBy2(array, 13))

//равносильно, но с помощтю Array.prototype мы можем перезаписать массив

Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}

console.log(array.multBy(13))
//мы можем написать в консоли [x,x,x].multyBy(5)