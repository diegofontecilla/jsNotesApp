// let add = function(a, b, c) {
//     return a + b + c
// }

// let result = add(10, 1, 5)
// console.log(result)



let getScoreText = function(name = 'anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined,  100)
// console.log(scoreText)






// let getTip = function(total, tipPercent = 20) {
//     let tip = (tipPercent / 100) * total
//     return `A ${tipPercent}% tip on $${total} would be $${tip}`

// }

// let firstClient = getTip(10, 10)
// console.log(firstClient)



let getTip = function (total, tipPercent = .2) {
    percent = tipPercent * 100
    tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let clientTip = getTip(60)
console.log(clientTip)

