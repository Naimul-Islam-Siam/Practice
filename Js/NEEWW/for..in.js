const incomes = {
   rent: 10000,
   grocery: 200,
   sale: 4000,
   wage: 5000
};

let total = 0;
for (let i in incomes) {
   console.log(i);
   console.log(incomes[i]);
   total = total + incomes[i];
}
console.log(`Total Income: ${total}`);