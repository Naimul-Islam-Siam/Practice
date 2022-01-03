fn main() {
   let total_buy: i32;
   let free_shipping: bool;
   let shipping_charge: i32 = 10;

   if total_buy > 50 {
      free_shipping = true;
      println!("You're qualified for free shipping");
   } else {
      free_shipping = false;
      println!("You are not qualified for free shipping");
   }

   total_buy = match free_shipping {
      true => total_buy + 0,
      false => total_buy + shipping_charge,
   }

   match total_buy {
      // in match expression every possible cases must be mentioned
      1 => println!("1"),
      2 => println!("2"),
      _ => println!("No match found") // fallback pattern, works like else
   }
}
