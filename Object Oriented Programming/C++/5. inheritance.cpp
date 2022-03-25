#include<iostream>
using std::string;

class AbstractEmployee {
  virtual void AskForPromotion() = 0;
};

class Employee: AbstractEmployee {
  protected:
    // accessible only inside this class and the children of this class
    string Name;
  private:
    // encapsulated
    // not accessible outside of the class
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

// Developer is a child class and Employee is the parent / base class
// if Employee is not set to public here explicitly, Developer class won't be able to access methods of Employee class 
class Developer: public Employee {
  public:
    string FavProgLang;

    // constructor
    Developer(string name, string company, int age, string favLang): Employee(name, company, age) {
      FavProgLang = favLang;
    };

    void FixBug() {
      std::cout<<Name<<" is fixing bug using "<<FavProgLang<<std::endl;
    };
};

// Teacher class is a child class of Employee class
class Teacher: public Employee {
  private:
    string Subject;
  public:
    Teacher(string name, string company, int age, string subject): Employee(name, company, age) {
      Subject = subject;
    };

    void getSubject() {
      return Subject;
    };

    void PrepareLesson() {
      std::cout<<Name<<" is preparing "<<Subject<<" lessons.";
    };
};

int main() {
  Developer d1 = Developer("Jack", "Google", 29, "C++");
  d1.FixBug();
  // d1 wouldn't have been able to access this AskForPromotion() method if Employee was't set as public in Developer: public Employee
  d1.AskForPromotion();

  Teacher t1 = Teacher("Ron", "Cool School", 32, "History");
  t1.PrepareLesson();
};