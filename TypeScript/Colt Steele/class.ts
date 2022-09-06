interface PlayerInterface {
   readonly firstName: string,
   readonly lastName: string,
   fullName: string,
   score: number
};

class Player implements PlayerInterface {
   readonly firstName: string;
   readonly lastName: string;
   private _score: number = 0; // all the instance of this class will get score by default as 0
   protected role: string;

   constructor(firstName: string, lastName: string, role: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.role = role;
   }

   public get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
   }

   public get score(): number {
      return this._score;
   }

   public set score(newScore: number) {
      if(newScore < 0) {
         throw new Error("Score can't be negative.");
      } else {
         this._score = newScore;
      }
   }
};

class AdminPlayer extends Player {
   isAdmin: boolean = true;

   updateUserRole(newRole: string) {
      this.role = newRole;
   }
};