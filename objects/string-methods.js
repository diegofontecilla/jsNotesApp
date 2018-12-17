let name = ' Diego Fontecilla '

// console.log(name.length)

// console.log(name.toUpperCase(name))

// console.log(name.toLowerCase(name))

// let password = 'abc123jghfd098'
// console.log(password.includes('password'))

// console.log(name.trim())

// challenge

let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('12345678'))
console.log(isValidPassword('abc123ritig'))
console.log(isValidPassword('ajgsdfpassword'))