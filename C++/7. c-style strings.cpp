#include <iostream>
#include <cstring>
#include <cctype>
using std::cin;
using std::cout;
using std::endl;

int main()
{
   char first_name[20];
   char last_name[20];
   char full_name_supposed[40];
   char full_name_actual[50];

   cout << first_name << endl; // garbage value

   cout << "Enter your first name = " << endl;
   cin >> first_name;

   cout << "Enter your last name = " << endl;
   cin >> last_name;

   cout << "Your firstname, " << first_name << " has " << strlen(first_name) << " characters." << endl;
   cout << "Your lasttname, " << last_name << " has " << strlen(last_name) << " characters." << endl;

   strcpy(full_name_supposed, first_name);
   strcat(full_name_supposed, " ");
   strcat(full_name_supposed, last_name);

   cout << "Your supposedly fullname, " << full_name_supposed << " has " << strlen(full_name_supposed) << " characters." << endl;

   // convert to uppercase
   for (size_t i = 0; i < strlen(full_name_supposed); i++)
   {
      if (isalpha(full_name_supposed[i])) // check whether the char is an alphabet or not
      {
         full_name_supposed[i] = toupper(full_name_supposed[i]);
      }
   }

   cout << "Your supposedly fullname in uppercase = " << full_name_supposed << endl;
};