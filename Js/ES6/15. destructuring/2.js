//destructuring arrays

const companies = ["Google", "Facebook", "Microsoft", "Amazon", "Apple", "Uber", "Two Sigma", "Bloomberg", "Grab"];

const [firstCompany, secondCompany, thirdCompany, ...rest] = companies;

console.log(firstCompany); // same as companies[0]
console.log(thirdCompany); // same as companies[2]
console.log(rest); // all the others (in form of array) that are not named in a variable