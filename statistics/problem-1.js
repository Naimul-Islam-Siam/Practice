var listOfCGPA = [2.69, 2.82, 3.00, 3.08, 3.02, 2.66, 3.60, 3.05, 2.90, 3.68, 3.27, 2.77, 2.78, 3.43, 2.76, 2.55, 3.20, 2.92, 3.70, 2.91, 2.83, 2.61, 3.17, 3.21, 3.28, 3.29, 3.25, 2.67, 2.61, 3.00];
var newArr = [];
var a;
var mult = 1;
var numberOfStudents = 30;

function arithmeticMean(arr) {
    var mean = summation(arr) / numberOfStudents;
    return mean;
}

var arMean = arithmeticMean(listOfCGPA);

function geometricMean(arr) {
    var mean = Math.pow(multiplication(arr), (1 / numberOfStudents));
    return mean;
}

function variance(arr, diff) {
    for (let i = 0; i < arr.length; i++) {
        a = Math.pow((arr[i] - diff), 2);
        newArr.push(a);
    }
    var totalDeviation = summation(newArr);
    var vari = totalDeviation / (numberOfStudents - 1);

    return vari;
}

function summation(arr) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        sum = sum + arr[j];
    }

    return sum;
}

function multiplication(arr) {
    for (var k = 0; k < arr.length; k++) {
        mult = mult * arr[k];
    }

    return mult;
}

function FiveNoSummary(arr) {
    var sortedArray = arr.sort();

    var smallest = sortedArray[0];

    var fQ = Math.ceil((sortedArray.length * 0.25));
    var firstQuartile = sortedArray[fQ];

    var secondQuartile;
    var sQ = Math.ceil((sortedArray.length * 0.5));

    if (arr.length % 2 === 0) {
        secondQuartile = (sortedArray[sQ] + sortedArray[sQ + 1]) / 2;
    } else {
        secondQuartile = sortedArray[sQ];
    }

    var tQ = Math.ceil((sortedArray.length * 0.75));
    var thirdQuartile = sortedArray[tQ];

    var largest = sortedArray[sortedArray.length - 1];

    return {
        smallest: smallest,
        firstQuartile: firstQuartile,
        secondQuartile: secondQuartile,
        thirdQuartile: thirdQuartile,
        largest: largest
    };
}

function outliers(q1, q3, min, max) {
    let IQR = q3 - q1;

    let outMin = q1 - (1.5 * IQR);
    let outMax = q3 + (1.5 * IQR);

    console.log(`OutMin = ${outMin}, OutMax = ${outMax}`);

    if (min > outMin && max < outMax) {
        console.log(`There is no outliers as there is no value less than ${outMin} and greater than ${outMax}`);
        return false;
    } else {
        console.log(`There is outliers`);
        return true;
    }
}

console.log(`Arithmetic mean = ${arithmeticMean(listOfCGPA)}`);
console.log(`Geometric mean = ${geometricMean(listOfCGPA)}`);
console.log(`Variance = ${variance(listOfCGPA, arMean)}`);
let summary = FiveNoSummary(listOfCGPA);
console.log(`Smallest value = ${summary.smallest}, First Quartile = ${summary.firstQuartile}, Second Quartile = ${summary.secondQuartile}, Third Quartile = ${summary.thirdQuartile}, Largest value = ${summary.largest}`);
outliers(summary.firstQuartile, summary.thirdQuartile, summary.smallest, summary.largest);