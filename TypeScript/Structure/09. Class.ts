/* 
   private vs protected:
      1. neither private nor protected elements can be accessed publicly (outside of class)
      2. Private elements can only be accessed within its own class. 
         Those elements can't be accessed outside of the class itslef. 
         Not even in its children
      3. Protected elements can be accessed only within itself and its children
      4. If parent class has a private element children classes won't inherit that
      5. But if a element in parent class is protected, children classes will inherit that
*/

class Vehicle {
   constructor(protected color: string) {
      
   }

   /* 
      // equivalent of the constructor code is:

      color: string

      constructor(color: string) {
         this.color = color;
      }
   */

   protected drive(): void {
      console.log(`Chugga Chugga!`);
   }
};


class Car extends Vehicle {
   constructor(private seats: number, color: string) {
      super(color);
   }

   private honk(): void {
      console.log(`Vroom Vroom!`);
   }

   public start(): void {
      this.drive();
      this.honk();
   }

   public details(): void {
      console.log(`This car is of ${this.color} color and has ${this.seats} seats`)
   }
};

const car1 = new Car(4, 'Black');

car1.start();
car1.details();