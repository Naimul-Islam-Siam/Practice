import { CsvFileReader } from "./inheritance/CsvFileReader";
import { dateStringToDate } from "./utils";
import { MatchResults } from "./MatchResults";

export type MatchData = [Date, string, string, number, number, MatchResults, string]; // tuple

export class MatchReader extends CsvFileReader<MatchData> {
   mapRow(row: string[]): MatchData {
      return [
         dateStringToDate(row[0]),
         row[1],
         row[2],
         parseInt(row[3]),
         parseInt(row[4]),
         row[5] as MatchResults, // type assertion
         row[6] 
      ];
   }
};