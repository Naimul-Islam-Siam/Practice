struct BankAccount {
   balance: i32,
   verified: bool,
}

fn main() {
   let my_account = BankAccount {
      balance: 400,
      verified: true,
   };

   println!("Account balance is: {:?}", my_account.balance);
   println!("Account is verified? : {:?}", my_account.verified);
}
