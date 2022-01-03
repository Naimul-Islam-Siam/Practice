fn main() {
   // in array every elements must be of the same datatype
   let array_items: [i32; 5] = [1, 2, 3, 4, 5]; // [datatype; length of array]
   println!("{:?}", array_items);

   let vector_items = vec![1, 2, 3, 4, 5];
   println!("{:?}", vector_items);

   let mut vector_items2: Vec<i32> = Vec::new();
   vector_items2.push(1);
   vector_items2.push(2);
   vector_items2.push(3);
   vector_items2.push(4);
   vector_items2.push(5);
   println!("{:?}", vector_items2);
}
