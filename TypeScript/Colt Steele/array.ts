type Point = {
   x: number,
   y: number
};

const coOrdinates: Point[] = [];
coOrdinates.push({ x: 10, y: 10 });
coOrdinates.push({ x: 2, y: 3 });

const board: string[][] = [
   ["X", "O", "O"],
   ["O", "X", "X"],
   ["X", "O", "O"]
];

type Product = {
   name: string,
   price: number
};

function totalPrice(products: Product[]): number {
   let totalPrice = 0;

   for(let product of products) {
      totalPrice = totalPrice + product.price;
   }

   return totalPrice;
}