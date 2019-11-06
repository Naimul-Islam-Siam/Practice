var expense = {
    type: 'Business',
    amount: '45$'
};


// ES5
var type = expense.type;
var amount = expense.amount;



// ES6
const {type} = expense;
const {amount} = expense;

// cleaner 
const {type, amount} = expense;