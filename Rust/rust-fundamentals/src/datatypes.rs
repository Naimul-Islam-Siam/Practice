fn add(num1: i32, num2: i32) -> i32 {
   return num1 + num2;
}

fn main() {
   let a: i32 = 20; // i32 is a datatype for numbers
   let b: i32 = 10;
   let c: i32;

   c = add(a, b);

   println!("The addition of {} and {} is {}", a, b, c);
}
