struct BankAccount {
   balance: i32,
   verified: bool,
}

fn print_balance(account: &BankAccount) {
   println!("{:?}", account.balance);
}

fn print_verified(account: &BankAccount) {
   println!("{:?}", account.verified);
}

// Result is basically used for Error Handling
fn is_verified(account: &BankAccount) -> Result<bool, bool> {
   return match account.verified {
      true => Ok(true),
      false => Err(false),
   };
}

fn main() {
   let my_account = BankAccount {
      balance: 400,
      verified: true,
   };

   let my_account2 = BankAccount {
      balance: 600,
      verified: false,
   };

   let verification_status = is_verified(&my_account).unwrap(); // we used unwrap to access the value of Ok()
                                                                // otherwise it would print Ok(true) instead of true
                                                                // but unwrap function can't print any values if Err() is invoked

   let verification_status2 = is_verified(&my_account2).expect("Unable to unwrap"); // expect function can print the desired message if Err() is invoked

   print_balance(&my_account);
   print_verified(&my_account);
   println!(
      "Verification Status for account 1: {:?}",
      verification_status
   );
   println!(
      "Verification Status for account 2: {:?}",
      verification_status2
   );
}
