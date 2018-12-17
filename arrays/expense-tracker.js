const account = {
    name: 'Diego Fontecilla',
    expenses: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description, 
            amount: amount 
        })
    }, 
    getAccountSummary: function () {
        let totalExpenses = 0

        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount
        })
        return `${this.name} has $${totalExpenses} in expenses.`
}
}

account.addExpense('Car', 2000)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())
