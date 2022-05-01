#include <iostream>
using std::cin;
using std::cout;
using std::endl;

int main()
{
   int test_scores[5]{100, 95, 99, 87, 88}; // as usual
   int high_score_per_level[10]{2, 3};      // init with 3,5 and rest of the 8 elements will be 0
   int another_array[]{1, 2, 3, 4, 5};      // size will be calculated automatically

   cout << test_scores[0] << endl; // 0
   // cout << test_scores[5] << endl; // out of bound

   cout << "Value of the array name in memory is: " << test_scores << endl; // some hexadecimal value which is actually the memory address where the array is located

   int matrix[2][3]{{2, 2, 1}, {3, 4, 3}};

   cout << "2D Array first element: " << matrix[0][0] << endl;
};