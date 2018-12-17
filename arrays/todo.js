const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const deleteTodo = function (todoList, todoText) {
    const index = todoList.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter (function (todo) {
        return !todo.completed
    })   
}

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'buy food')
// console.log(todos)


// const objectConverter = function (stringArray) {
//     stringArray.forEach(function(element, index) {
//         const isItCompleted = Math.random()
//         todos.splice(index, 1, { text: element, completed: (isItCompleted >= 0.5) })
//     })
//     return todos
// }

// objectConverter(todos)
// // console.log(todos)

// const deleteTodo = function (objArray, string) {
//     const findString = function () {objArray.forEach(function (element, index) {
//             return (element.text.toLowerCase() === string)
//         })
//     }

//     const index = objArray.findIndex(findString)
//     console.log(index)
// }