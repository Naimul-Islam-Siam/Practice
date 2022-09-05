class Player {
   readonly firstName: string;
   readonly lastName: string;
   private _score: number = 0; // all the instance of this class will get score by default as 0

   constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
   }

   public get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
   }

   public get score(): number {
      return this._score;
   }

   public set updateScore(newScore: number) {
      if(newScore < 0) {
         throw new Error("Score can't be negative.");
      } else {
         this._score = newScore;
      }
   }
};