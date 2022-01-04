// to prevent memory leak, Rust uses Ownership model
// the owner of a value is the variable to which the value is assigned
// Rust automatically deallocate memory whenever a variable is not needed anymore (dropping a value)
// values are dropped whenever the function in which the variable containing the value stops running
// to resolve this issue (using the same variable in different functions) we use borrowing
// to allow borrowing we use & symbol to the parameters and arguments which allows other functions to borrow that variable temporarily

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

fn main() {
   let my_account = BankAccount {
      balance: 400,
      verified: true,
   };

   print_balance(&my_account);
   print_verified(&my_account);
   // if we hadn't use & in parameter (account: BankAccount) and argument (&my_account),
   // my_account variable would've been dropped after print_balance function
   // so print_verified function would throw an error, as my_account variable would've been erased from the memory
}
