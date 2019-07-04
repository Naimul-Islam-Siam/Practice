function print(x) {
    console.log(x);
}

function timeLeftBeforeRetirement(birthYear) {
    const age = new Date().getFullYear() - birthYear;

    return [age, 65 - age];
}

const [age, retirement] = timeLeftBeforeRetirement(1997);
print(age);
print(retirement);