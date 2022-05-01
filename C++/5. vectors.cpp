#include <iostream>
#include <vector>
using std::cin;
using std::cout;
using std::endl;
using std::vector;

int main()
{
   vector<int> test_scores{100, 95, 99, 87, 88};
   vector<char> vowels{'a', 'e', 'i', 'o', 'u'};

   cout << "First element of the vector: " << test_scores[0] << endl;
   cout << "Second element of the vector: " << test_scores.at(1) << endl;
   cout << "Size of the vector (test_scores): " << test_scores.size() << endl;

   test_scores[2] = 90;       // [100, 95, 90, 87, 88]
   test_scores.push_back(91); // [100, 95, 99, 87, 88, 91]

   // 2D Vectors
   vector<vector<int>> movie_ratings{{8, 7, 8, 6}, {8, 6, 9, 7}, {7, 7, 8, 6}};

   cout << "First rating of first user: " << movie_ratings[0][0] << endl;
   cout << "Second rating of first user: " << movie_ratings.at(0).at(1) << endl;
   cout << "Size of the vector (movie_ratings): " << movie_ratings.size() << endl;

   vector<int> vector1;
   vector<int> vector2;
   vector<vector<int>> vector2D;

   vector1.push_back(2);
   vector1.push_back(3);

   vector2.push_back(1);
   vector2.push_back(4);

   vector2D.push_back(vector1);
   vector2D.push_back(vector2);

   cout << vector1.at(0) << endl; // 2

   cout << vector2D.at(0).at(0) << endl; // 2

   vector1.at(0) = 10;

   cout << vector2D.at(0).at(0) << endl; // 2

   cout << vector1.at(0) << endl; // 10
};