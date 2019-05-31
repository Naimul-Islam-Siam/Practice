var arr1 = [1, 2, 3];

//Non Functional Approach
var arr2 = [];

for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}
console.log(arr2);

//Functional Approach
function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

function multiplyByTwo(item) {
    return item * 2;
}

var arr3 = mapForEach(arr1, multiplyByTwo);
console.log(arr3);

function checkPastLimit(limit, item) {
    return item > limit;
}

var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);