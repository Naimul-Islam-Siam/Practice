import { MatchData } from "../MatchData";
import { MatchResults } from "../MatchResults";
import { Analyzer } from "./../Summary";

export class WinsAnalysis implements Analyzer {
   constructor(public team: string) {}

   run(matches: MatchData[]): string {
      let winsCounter: number = 0;

      for(let match of matches) {
         if(match[1] === "Man United" && match[5] === MatchResults.homeWin) {
            winsCounter++;
         } else if(match[2] === "Man United" && match[5] === MatchResults.awayWin) {
            winsCounter++;
         }
      }

      return `${this.team} won ${winsCounter} games.`
   }
};