//Recursion
function fibonacciRecursion(num) {
    if (num === 1) return 1;
    if (num < 1) return 0;

    return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
}

let startRecur = new Date().getTime();
console.log(fibonacciRecursion(14));
let endRecur = new Date().getTime();
let timeRecur = endRecur - startRecur;



//Iteration
function fibonacciIteration(num) {
    if (num <= 1) return 1;

    let store = [];

    store[0] = 0;
    store[1] = 1;

    for (let i = 2; i <= num; i++) {
        store[i] = store[i - 1] + store[i - 2];
    }

    return store[num];
}

let startIter = new Date().getTime();
console.log(fibonacciIteration(13));
let endIter = new Date().getTime();
let timeIter = endIter - startIter;


console.log(`Time taken by iteration : ${timeIter} ms. Time taken by recursion : ${timeRecur} ms.`);