#include <iostream>
using std::cout;
using std::cin;
using std::endl;

int main() {
   int num1;
   int num2;
   int num3;
   int num4;
  
   cout << "Enter First Integer: ";
   cin >> num1;

   cout << "Enter Second Integer: ";
   cin >> num2;
  
   cout << "You entered " << num1 << " and " << num2 << endl;

   cout << "Enter Two Integers Separated with a Space: ";
   cin >> num3 >> num4;

   cout << "You entered " << num3 << " and " << num4 << endl;
}