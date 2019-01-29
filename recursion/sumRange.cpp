#include<iostream>
using namespace std;

int sumRangeRecursion(int number){
    if(number == 1)
        return 1;
    else
        return number + sumRangeRecursion(number - 1);
}

int sumRangeNonRecursion(int number){
    int total = 0;
    for(int i = 1; i <= number; i++){
        total = total + i;
    }
    return total;
}

int main()
{
    int input;
    cout<<"Enter Number = ";
    cin>>input;

    cout<<"\nThe Sum of Numbers up to "<<input<<" is = "<<sumRangeRecursion(input);
    cout<<"\nThe Sum of Numbers up to "<<input<<" is = "<<sumRangeNonRecursion(input);
    cout<<endl;

    return 0;
}
