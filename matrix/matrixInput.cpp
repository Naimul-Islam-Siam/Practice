#include<iostream>
using namespace std;

int main()
{
    int r,c;
    cout<<"Enter The Number of Rows = ";
    cin>>r;
    cout<<"Enter The Number of Columns = ";
    cin>>c;
    int matrix[r][c];
    cout<<endl;

    for(int row = 1; row <= r; row++){
        cout<<"Input The Elements of Row "<<row<<": ";
        for(int column = 1; column <= c; column++){
            cin>>matrix[row][column];
        }
    }

    cout<<"\nThe Matrix is : "<<endl<<endl;
    for(int row = 1; row <= r; row++){
        for(int column = 1; column <= c; column++){
            cout<<matrix[row][column]<<"\t";
        }
        cout<<endl;
    }

    return 0;
}
