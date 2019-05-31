function buildFunction() {
    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            function () {
                console.log(i);
            }
        )
    }

    return arr;
}

var arrayOfFunctions = buildFunction();

for (var j = 0; j < arrayOfFunctions.length; j++) {
    arrayOfFunctions[j]();
}

function buildFunction2() {
    var arr2 = [];

    for (var i = 0; i < 3; i++) {
        arr2.push(
            (function (i) {
                return function () {
                    console.log(i);
                }
            }(i))
        )
    }
}

var arrayOfFunctions2 = buildFunction2();

for (var j = 0; j < arrayOfFunctions2.length; j++) {
    arrayOfFunctions2[j]();
}