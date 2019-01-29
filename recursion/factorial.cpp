#include<iostream>
using namespace std;

//using recursion
int factorialRecursion(int number){
    if(number == 1){
        return 1;
    }
    else{
        return number * factorialRecursion(number - 1);
    }
}

//non-recursion
int factorialNonRecursion(int number){
    int total = 1;
    for(int i = 1; i <= number; i++){
        total = total * i;
    }
    return total;
}

int main()
{
    int input;
    cout<<"Enter The Number = ";
    cin>>input;

    cout<<"\nThe Factorial of The Number is = "<<factorialRecursion(input);
    cout<<"\nThe Factorial of The Number is = "<<factorialNonRecursion(input);

    cout<<endl;

    return 0;
}
