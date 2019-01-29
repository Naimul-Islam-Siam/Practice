#include<iostream>
using namespace std;

int countDownRecursion(int number){
    int x;
    if(number == 0){
        cout<<"\nAll Done!"<<endl;
        return x;
    }
    cout<<number<<",";
    number--;
    x = countDownRecursion(number);
}

int countDownNonRecursion(int number){
    for(int i = number; i > 0; i--){
        cout<<i<<",";
    }
    cout<<"\nAll Done!"<<endl;
}

int main()
{
    int input;
    cout<<"Enter Number = ";
    cin>>input;
    countDownRecursion(input);
    cout<<endl;
    countDownNonRecursion(input);

    return 0;
}
