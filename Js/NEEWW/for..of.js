const subreddits = ["football", "cricket", "guitar", "music"];

for (let sub of subreddits) {
   console.log(sub);
}

for (char of "web development") {
   console.log(char.toUpperCase());
}

const movies = {
   Arrival: 9.5,
   Alien: 9,
   Amelie: 8,
   'In Burges': 9,
   Amadeus: 10,
   'Kill Bill': 8,
   'Little Miss Sunshine': 8.5
};

for (let movie of Object.keys(movies)) {
   console.log(`${movie}: ${movies[movie]}`);
}
//movie of movies won't work
//Object.keys(movies) = ["Arrival", "Alien", .... , "Little Miss Sunshine"];