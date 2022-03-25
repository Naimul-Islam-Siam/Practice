#include<iostream>
using std::string;

class Employee {
  private:
    // encapsulated
    // not accessible outside of the class
    string Name;
    string Company;
    int Age;

  public:
    Employee(string name, string company, int age) {
      Name = name;
      Company = company;
      Age = age;
    };

    // setters
    void setName(string name) {
      Name = name;
    };

    void setComapny(string company) {
      Company = company;
    }

    void setAge(int age) {
      if(age >= 18) {
        Age = age; 
      }
    }

    // getters
    string getName() {
      return Name;
    }

    string getCompany() {
      return Company;
    }

    int getAge() {
      return Age;
    }

    void IntroduceYourself() {
      std::cout<<"Name: "<<Name<< std::endl;
      std::cout<<"Company: "<<Company<< std::endl;
      std::cout<<"Age: "<<Age<<std::endl;
    };
};

int main() {
  Employee employee1 = Employee("Saldina", "YT_CodeBeauty", 25);
  employee1.IntroduceYourself();

  Employee employee2 = Employee("John", "Amazon", 35);
  employee2.IntroduceYourself();

  // employee1.Age; // this won't work because Age is set to private
  // so we need to use getter for Age
  std::cout<<employee1.getAge()<<std::endl;

  // employee2.Age = 36; this won't work because Age is set to private
  // so we need to use setter for Age
  employee2.setAge(36);
  // employee2.Age; // won't work
  // so we need to use getter for Age
  std::cout<<employee2.getAge()<<std::endl;
};