let convertFahrenheitToCelcius = function (f) {
    let c = (f - 32) * 5 / 9

    if (c <= 0) {
        let isFreezing = true
    }

    return c
}

let tempOne = convertFahrenheitToCelcius(32)
let tempTwo = convertFahrenheitToCelcius(68)

console.log(tempOne)
console.log(tempTwo)