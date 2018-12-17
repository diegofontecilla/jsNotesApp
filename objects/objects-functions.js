let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'Obra Gruesa',
    author: 'Nicanor Parra',
    pageCount: 130
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`    
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

// console.log(bookSummary.pageCountSummary)


// challenge:

let convertFahrenheitIn = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celcius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit + 459.67) * 5 / 9
    }
}

let temps = convertFahrenheitIn(91)
console.log(temps)



