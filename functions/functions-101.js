// let greetUser = function() {
//     console.log('welcome user')
// }

// // greetUser()


// let square = function(num) {
//     let result = num * num
//     return result
// }

// let otherValue = square(3)
// let value = square(10)
// console.log(value)
// console.log(otherValue)




let convertFahrenheitToCelcius = function(f) {
    let c = (f - 32) * 5 / 9
    return c
}

let firstConvertion = convertFahrenheitToCelcius(32)
let secondConvertion = convertFahrenheitToCelcius(68)

console.log(firstConvertion)
console.log(secondConvertion)