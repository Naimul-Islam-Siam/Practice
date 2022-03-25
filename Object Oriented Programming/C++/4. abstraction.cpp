#include<iostream>
using std::string;

// abstract class
class AbstractEmployee {
  virtual void AskForPromotion() = 0;
};

// Employee class must follow AbstractEmployee class
class Employee: AbstractEmployee {
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

    void AskForPromotion() {
      if(Age > 30) {
        std::cout<<Name<<" got promoted."<<std::endl;
      } else {
        std::cout<<Name<<", sorry no promotion for you."<<std::endl;
      }
    };

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

  employee1.AskForPromotion();
  employee2.AskForPromotion();
};