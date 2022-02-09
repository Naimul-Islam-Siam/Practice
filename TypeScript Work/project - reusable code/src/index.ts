import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("football.csv");
reader.read();

const matches: string[][] = reader.data;


// enumeration -> set of very closely related values
enum matchResults {
    homeWin = "H",
    awayWin = "A",
    draw = "D"
};

let manUnitedWins: number = 0;

for(let match of matches) {
   if(match[1] === "Man United" && match[5] === matchResults.homeWin) {
      manUnitedWins++;
   } else if(match[2] === "Man United" && match[5] === matchResults.awayWin) {
      manUnitedWins++;
   }
}

console.log(`Man United Won: ${manUnitedWins} games`);