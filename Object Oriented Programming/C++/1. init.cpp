#include<iostream>
using std::string;

class Employee {
  public:
    string Name;
    string Company;
    int Age;

    void IntroduceYourself() {
      std::cout<<"Name: "<<Name<< std::endl;
      std::cout<<"Company: "<<Company<< std::endl;
      std::cout<<"Age: "<<Age<<std::endl;
    };
};

// by default everything inside class is private in C++
// so we changed the access modifier to public

int main() {
  Employee employee1;
  employee1.Name = "Saldina";
  employee1.Company = "YT_CodeBeauty";
  employee1.Age = 25;
  employee1.IntroduceYourself();

  Employee employee2;
  employee2.Name = "John";
  employee2.Company = "Amazon";
  employee2.Age = 35;
  employee2.IntroduceYourself();
};