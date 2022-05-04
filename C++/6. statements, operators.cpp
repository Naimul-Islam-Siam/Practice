#include <iostream>
using std::cin;
using std::cout;
using std::endl;

int main()
{
   // values in cents
   const int dollar_value = 100;
   const int quarter_value = 25;
   const int dime_value = 10;
   const int nickel_value = 5;

   int amount; // in cents

   cout << "Enter value in cents: ";
   cin >> amount;

   int balance, dollars, quarters, dimes, nickels, pennies;

   balance = amount;

   dollars = balance / dollar_value;
   balance = balance - (dollars * dollar_value);

   quarters = balance / quarter_value;
   balance = balance - (quarters * quarter_value);

   dimes = balance / dime_value;
   balance = balance - (dimes * dime_value);

   nickels = balance / nickel_value;
   balance = balance % nickel_value; // using modulas operator for a different approach

   pennies = balance;

   cout << "\nDollars: " << dollars << endl;
   cout << "Quarters: " << quarters << endl;
   cout << "Dimes: " << dimes << endl;
   cout << "Nickels: " << nickels << endl;
   cout << "Pennies: " << pennies << endl;

   return 0;
};