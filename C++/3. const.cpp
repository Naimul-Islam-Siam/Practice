#include <iostream>
using std::cin;
using std::cout;
using std::endl;

int main()
{
   cout << "Hello, Welcome to Frank's Carpet Cleaning Service" << endl;
   cout << "\nHow many rooms would you like cleaned?" << endl;

   int number_of_rooms;
   cin >> number_of_rooms;

   // constants
   const double price_per_room{30};
   const double sales_tax{0.06};
   const int expiry_duration{30}; // in days

   double cost{price_per_room * number_of_rooms};
   double tax{cost * sales_tax};
   double total_cost{cost + tax};

   cout << "\n---- Estimate for carpet cleaning service ----" << endl;
   cout << "Number of rooms: " << number_of_rooms << endl;
   cout << "Price per room: $" << price_per_room << endl;
   cout << "Cost: $" << cost << endl;
   cout << "Tax: $" << tax << endl;
   cout << "====================" << endl;
   cout << "Total Cost: $" << total_cost << endl;
   cout << "This estimate is valid for: " << expiry_duration << " days." << endl;

   return 0;
};