interface Person {
   firstName: string,
   lastName: string,
   nickName?: string
};

interface Person {
   age: number
};

interface Employee {
   readonly id: number,
   email: string
};

interface Engineer extends Person, Employee {
   level: string,
   languages: string[]
};

const john: Engineer = {
   id: 20003,
   firstName: "John",
   lastName: "Cena",
   age: 48,
   email: "johncena404@gmail.com",
   level: "professional",
   languages: ["English", "Mandarin"]
};