import { MatchReader } from "./MatchReader";
import { MatchData } from "./MatchData";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./outputTargets/ConsoleReport";


// ------ Instead of writing the following code: ------
/*
   // Read the dataset that's in CSV format
   const csvFileReader = new CsvFileReader("football.csv");

   const matchReader = new MatchReader(csvFileReader);
*/

// ------ We can write (Because of the static `fromCSV` method in `MatchReader`): ------
const matchReader = MatchReader.fromCSV("football.csv");
matchReader.load();

const matches: MatchData[] = matchReader.matches;

const summary = new Summary(new WinsAnalysis("Wolves"), new ConsoleReport());
summary.buildAndPrintReport(matches);