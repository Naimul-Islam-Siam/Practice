// to possess an abstract method or property, the class must be an abstract class
abstract class Employee {
   public readonly firstName: string;
   public readonly lastName: string;

   constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
   }

   public greet(): void {
      console.log("Hello!!");
   }

   // abstract method
   public abstract getPay(): number; // all the children of this class must have this method
};

/* 
   difference between interface and abstract class:
   abstract class can possess other extra methods and properties unlike interface
   
   for example: greet(): void method here
*/



class FullTimeEmployee extends Employee {
   public readonly firstName: string;
   public readonly lastName: string;
   private _salary: number;

   constructor(firstName: string, lastName: string, salary: number) {
      super(firstName, lastName); // pass the parameters to parent

      this.firstName = firstName;
      this.lastName = lastName;
   }

   public getPay(): number {
      return this._salary;
   }
};


class PartTimeEmployee extends Employee {
   public readonly firstName: string;
   public readonly lastName: string;
   private _hourlyRate: number;
   private _hoursWorked: number;

   constructor(firstName: string, lastName: string, hourlyRate: number, hoursWorked: number) {
      super(firstName, lastName);

      this.firstName = firstName;
      this.lastName = lastName;
      this._hourlyRate = hourlyRate;
      this._hoursWorked = hoursWorked;
   }

   public getPay(): number {
      return this._hourlyRate * this._hoursWorked;
   }
};