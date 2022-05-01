#include <iostream>
#include <climits>
using std::cin;
using std::cout;
using std::endl;

int main()
{
   cout << "Size of int = " << sizeof(int) << " bytes." << endl;
   cout << "Size of unsigned int = " << sizeof(unsigned int) << " bytes." << endl;
   cout << "Size of char = " << sizeof(char) << " bytes." << endl;
   cout << "Size of short = " << sizeof(short) << " bytes." << endl;
   cout << "Size of long = " << sizeof(long) << " bytes." << endl;
   cout << "Size of long long = " << sizeof(long long) << " bytes." << endl;

   cout << "Size of float = " << sizeof(float) << " bytes." << endl;
   cout << "Size of double = " << sizeof(double) << " bytes." << endl;
   cout << "Size of long double = " << sizeof(long double) << " bytes." << endl;

   cout << "Size of bool = " << sizeof(bool) << " bytes." << endl;

   // Values defined in climits
   cout << "Minimum value of int = " << INT_MIN << " and maximum value of int = " << INT_MAX << endl;
   cout << "Minimum value of char = " << CHAR_MIN << " and maximum value of char = " << CHAR_MAX << endl;
   cout << "Minimum value of short = " << SHRT_MIN << " and maximum value of short = " << SHRT_MAX << endl;
   cout << "Minimum value of long = " << LONG_MIN << " and maximum value of long = " << LONG_MAX << endl;
   cout << "Minimum value of long long = " << LLONG_MIN << " and maximum value of long long = " << LLONG_MAX << endl;
}