// ===================
// Example - 1
// ===================

interface Movie {
   title: string;
   duration: number;
};

interface TVShow {
   title: string;
   numberOfEpisodes: number;
   episodeDuration: number;
};

function getRuntime(media: Movie | TVShow): number {
   if("numberOfEpisodes" in media) {
      return media.numberOfEpisodes * media.episodeDuration;
   } else if("duration" in media) {
      return media.duration;
   }
};


// ===================
// Example - 2
// ===================

function printFullDate(date: string | Date) {
   if(date instanceof Date) {
      console.log(date.toUTCString());
   } else {
      console.log(new Date(date).toUTCString());
   }
};


// ===================
// Example - 3
// ===================

class User {
   public name: string;
   constructor(name: string) {this.name = name}
};

class Company {
   public name: string;
   constructor(name: string) {this.name = name}
};

function printName(entity: User | Company) {
   if(entity instanceof User) {
      console.log(`User Name: ${entity.name}`);
   } else if(entity instanceof Company) {
      console.log(`Comapny Name: ${entity.name}`);
   }
};


// ===================
// Example - 4
// ===================

interface Bird {
   name: string;
   wingsColor: string;  
};

interface Dog {
   name: string;
   breed: string;
};

// type predicate
function isBird(animal: Bird | Dog): animal is Bird {
   return (animal as Bird).wingsColor !== undefined;
};

function makeNoise(animal: Bird | Dog): string {
   if(isBird(animal)) {
      return "chirp";
   } else {
      return "woof";
   }
};