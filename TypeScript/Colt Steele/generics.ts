// ===================
// Example - 1
// ===================

const numberIdentity = (item: number): number => item;
const stringIdentity = (item: string): string => item;
const booleanIdentity = (item: boolean): boolean => item;


interface Cat {
   name: string;
   color: string;
};

// generic function
// return type will be corresponding to the parameter type
function identity<T>(item: T): T {
   return item;
};

identity<number>(2);
identity<string>("str");
identity<Cat>({name: "Blue", color: "blue"});


// ===================
// Example - 2
// ===================

function getRandomElement<T>(arr: T[]): T {
   const randomIndex = Math.floor(Math.random() * arr.length);
   return arr[randomIndex];
};

getRandomElement<number>([1, 2, 3, 4]);
getRandomElement<boolean>([true, false, true, true]);

// generic arrow function
const getRandEl = <T>(arr: T[]): T => {
   const randomIndex = Math.floor(Math.random() * arr.length);
   return arr[randomIndex];
};


// ===================
// Example - 3
// ===================

// multiple types generic function
// we don't need to mention return type, TS automatically figures that out
function merge<T, U>(obj1: T, obj2: U) {
   return {
      ...obj1,
      ...obj2
   };
};

const combinedObject = merge({ name: "Colt" }, { pets: ["blue", "elton"] });
const combinedObject1 = merge({ name: "Colt" }, 9); // it won't complain even though 9 isn't an object


// ===================
// Example - 4
// ===================

function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U) {
   return {
      ...obj1,
      ...obj2
   };
};

/*
   // won't work now
   const combinedObject1 = mergeObjects({ name: "Colt" }, 9);

   // will work
   const combinedObject1 = mergeObjects({ name: "Colt" }, { number: 9 });
*/


// ===================
// Example - 5
// ===================

// extend an interface
function mergeCats<T extends Cat>(cat1: T, cat2: T) {
   return {
      ...cat1,
      ...cat2
   };
};

mergeCats({name: "blue", color: "blue" }, {name: "elton", color: "white"});


// ===================
// Example - 6
// ===================

// working with class

interface Audio {
   title: string;
   artist: string;
};

interface Video {
   title: string;
   creator: string;
   resolution: string;
};

class Playlist<T> {
   public queue: T[] = [];

   public add(element: T) {
      this.queue.push(element);
   }
};

const audios = new Playlist<Audio>;
const videos = new Playlist<Video>;

audios.add({ title: "Photograph", artist: "Ed Sheeran" });
videos.add({ title: "Top goals of 2022", creator: "Manchester United", resolution: "4K"});