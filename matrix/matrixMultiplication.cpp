#include<iostream>
using namespace std;

int main()
{
    int r1,c1,r2,c2;
    int sum = 0;
    //input matrix-1
    cout<<"For Matrix 1 : "<<endl;
    cout<<"Enter The Number of Rows = ";
    cin>>r1;
    cout<<"Enter The Number of Columns = ";
    cin>>c1;
    int matrix1[r1][c1];
    cout<<endl;

    for(int row = 1; row <= r1; row++){
        cout<<"Input The Elements of Row "<<row<<": ";
        for(int column = 1; column <= c1; column++){
            cin>>matrix1[row][column];
        }
    }
    //input matrix-2
    cout<<"\nFor Matrix 2 : "<<endl;
    cout<<"Enter The Number of Rows = ";
    cin>>r2;
    cout<<"Enter The Number of Columns = ";
    cin>>c2;
    int matrix2[r2][c2];

    int matrixMultiplied[r1][c2];
    cout<<endl;

    for(int row = 1; row <= r2; row++){
        cout<<"Input The Elements of Row "<<row<<": ";
        for(int column = 1; column <= c2; column++){
            cin>>matrix2[row][column];
        }
    }
    //print matrix-1
    cout<<"\nThe Matrix 1 is : "<<endl<<endl;
    for(int row = 1; row <= r1; row++){
        for(int column = 1; column <= c1; column++){
            cout<<matrix1[row][column]<<"\t";
        }
        cout<<endl;
    }
    //print matrix-2
    cout<<"\nThe Matrix 2 is : "<<endl<<endl;
    for(int row = 1; row <= r2; row++){
        for(int column = 1; column <= c2; column++){
            cout<<matrix2[row][column]<<"\t";
        }
        cout<<endl;
    }
    //multiplication
    if(r1 == c2){
        for(int row = 1; row <= r1; row++){
            for(int column = 1; column <= c2; column++){
                for(int shift = 1; shift <= r1; shift++){
                    sum = ((matrix1[row][shift] * matrix2[shift][column]) + sum);
                }
                matrixMultiplied[row][column] = sum;
                sum = 0;
            }
        }
    }
    else{
        cout<<"\nas Number of rows of matrix1 ("<<r1<<") & number of columns of matrix 2 ("<<c2<<") didn't match.";
        cout<<"\nMultiplication is not possible."<<endl;
    }
    //print multiplied result
    if(r1 == c2){
      cout<<"\nThe Multiplied Matrix is : "<<endl;
        for(int row = 1; row <= r1; row++){
            for(int column = 1; column <= c2; column++){
                cout<<matrixMultiplied[row][column]<<"\t";
            }
            cout<<endl;
        }
    }

    return 0;
}
