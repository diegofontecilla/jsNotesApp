// let temp = 40

// if (temp >= 60 && temp <= 90) {
//   console.log('It is pretty nice out')
// } else if (temp <= 0 || temp >= 120) {
//     console.log('Do not go outside')
// } else {
//     console.log('Eh. Do what you want')
// }



let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only vigan dishes')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer some vigan option')
} else {
    console.log('Offer anything on the menu')
}

