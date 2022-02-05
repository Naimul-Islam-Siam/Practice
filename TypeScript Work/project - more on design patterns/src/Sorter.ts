export abstract class Sorter {
   // child classes must have these methods to use parent's methods
   abstract compare(leftIndex: number, rightIndex: number): boolean;
   abstract swap(leftIndex: number, rightIndex: number): void;
   abstract length: number;

   sort(): void {
      const { length } = this; 
      
      for(let i = 0; i < length; i++) {
         for(let j = 0; j < length - i - 1; j++) {
            if(this.compare(j, j+1)) {
               this.swap(j, j+1);
            }
         }
      }
   }
};

/*
   Abstract Class:
      - An abstract class can't be used to create an object directly
      - Can only be used as a parent class
      - Can contain real implementations for some methods
      - Implemented methods can refer to other methods that don't actually exist yet
*/