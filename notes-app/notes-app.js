const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// const p = document.querySelector('p')
// p.remove()

const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '*****'
    // console.log(p.textContent)
    // p.remove()
})

const newParagraph = document.createElement('p')
newParagraph.textContent = 'You gonna get a job very soon'
document.querySelector('body').appendChild(newParagraph)
