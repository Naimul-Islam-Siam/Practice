type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

type SkiSchoolStudent = {
   name: string,
   age: number,
   sport: "ski" | "snowboard",
   level: SkillLevel
};


// --------------------------

type RGB = {
   r: number,
   g: number,
   b: number
};

type HSL = {
   h: number,
   s: number,
   l: number
}

const colorCollection: (RGB| HSL)[] = [{ r: 223, g: 22, b: 49 }, { h: 352, s: 82, l: 48 }];


// --------------------------

function greet(person: string | string[]): void {
   if(typeof person === "string") {
      console.log(`Hello, ${person}!!!`);
   } else {
      for(let p of person) {
         console.log(`Hello, ${p}!!!`);
      }
   }
};