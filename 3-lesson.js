//ЗАМЫКАНИЯ
// function createCalcFunction(n) {
//     return function() {
//         console.log(1000* n)
//     }
// }
// const calc = createCalcFunction(42)
// calc()
// function createIncrementor(n) {
//     return function(num) {
//         return n + num
//     }
// }

// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)
// console.log(addOne(10))

// console.log(addTen(10))
// console.log(addTen(40))

// function urlGenerator(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')
// console.log(comUrl('google'))
// console.log(comUrl('netflix'))
// console.log(ruUrl('yandex'))
// console.log(ruUrl('vkontakte'))

