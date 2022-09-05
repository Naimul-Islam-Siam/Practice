// interface can only be used to indicate shape of an "Object"
interface Football {
   color: string,
   radius: number,
   brand: string,
   weight: number
};

/* 
   invalid interface:
   interface Color = "red" | "green"

   valid type
   type Color = "red" | "green" 
*/

interface Person {
   name: string
};

interface Person {
   height: number
};

// both of them will be combined and applied

/* 
   type Person {
      name: string
   };

   type Person {
      height: number
   };

   not valid
*/