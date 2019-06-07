function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}

console.log(addNumbers(1, 2, 3, 4, 5, 6));

// "..." operator is called "reset operator". They allow us to use as many arguments as we want on the fly.
// "..." operator makes the engine understand that number of arguments will be unknown. This will store all the numbers inside an array and then run operation