let myAccount = {
    name: 'Diego Fontecilla',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses += amount
}

let addIncome = function (account, amount) {
    account.income += amount
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    return (`Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`)
}

addIncome(myAccount, 50000)
addExpense(myAccount, 2.5)
addExpense(myAccount, 1000)
console.log(getAccountSummary(myAccount))
// resetAccount(myAccount)
addExpense(myAccount, 2.5)
console.log(getAccountSummary(myAccount))
