#include <iostream>
#include <string>
using std::cin;
using std::cout;
using std::endl;
using std::string;

int main()
{
   string s1;
   cout << "s1 = " << s1 << endl; // not garbage
   cout << s1.length() << endl;

   string s2{"Apple"};
   string s3{"Banana"};
   string s4{s1};       // Apple
   string s5{s1, 0, 3}; // App
   string s6(3, 'X');   // XXX

   s1 = s2 + " and " + s3 + " juice";
   cout << "s1 is now = " << s1 << endl;

   // normal for loop
   for (size_t i = 0; i < s2.length(); i++)
   {
      cout << s2.at(i) << ", ";
   }
   cout << endl;

   // range based for loop
   for (char c : s3)
   {
      cout << c << ", ";
   }
   cout << endl;

   return 0;
};