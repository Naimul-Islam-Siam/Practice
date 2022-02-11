import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResults } from "./MatchResults";
import { MatchData } from "./MatchData";

// Read the dataset that's in CSV format
const csvFileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const matches: MatchData[] = matchReader.matches;

let manUnitedWins: number = 0;

for(let match of matches) {
   if(match[1] === "Man United" && match[5] === MatchResults.homeWin) {
      manUnitedWins++;
   } else if(match[2] === "Man United" && match[5] === MatchResults.awayWin) {
      manUnitedWins++;
   }
}

console.log(`Man United Won: ${manUnitedWins} games`);