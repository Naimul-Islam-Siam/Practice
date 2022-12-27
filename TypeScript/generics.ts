/*
   type Filter = {
      (array: number[], predicate: (item: number) => boolean): number[];
      (array: string[], predicate: (item: string) => boolean): string[];
      (array: object[], predicate: (item: object) => boolean): object[];
   };

   const filter: Filter = (array: any[], predicate: Function) => {
      let result = [];

      for(let i = 0; i < array.length; i++) {
         let item = array[i]
         if(predicate(item)) {
            result.push(item);
         }
      }

      return result;
   }
*/

// type Filter = <T>(array: T[], predicate: (item: T) => boolean) => T[];

function filter<T> (array: T[], predicate: (item: T) => boolean): T[] {
   let result = [];

   for(let i = 0; i < array.length; i++) {
      let item = array[i]
      if(predicate(item)) {
         result.push(item);
      }
   }

   return result;
}

function greaterThanSeven(item: number): boolean{
   if(item > 7) {
      return true;
   }

   return false;
}



function map<T, U> (array: T[], predicate: (item: T) => T | U): T[] | U[] {
   // check if array is empty
   if(array.length == 0) {
      return array;
   }
   // create a new array to store values
   let result = [];
   // loop through the array and call the function
   for(let i = 0; i < array.length; i++) {
      let item: T | U = array[i];
      item = predicate(item);
      result[i] = predicate(array[i]);
   }
   // return the array
   return result;
};

const convertedArray = map([1, 2, 3], (num) => num.toString());