var colors = ["red", "green", "blue"];

for (var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log("-------------");

colors.forEach(function (color) {
    console.log(color);
});

console.log("-------------");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var sum = 0;

numbers.forEach(function (number) {
    sum += number;
});

console.log(sum);

console.log("-------------");