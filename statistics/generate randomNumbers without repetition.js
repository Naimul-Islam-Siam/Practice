var list = [];
var highestNumber = 60;
var lowestNumber = 1;
var totalNumbersWanted = 30;

while (list.length < totalNumbersWanted) {
    var number = Math.floor(Math.random() * (highestNumber - lowestNumber + 1)) + lowestNumber;

    if (!list.includes(number)) {
        list.push(number);
    }
}

console.log(list);