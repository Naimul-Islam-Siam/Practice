#include<iostream>
using namespace std;

int main()
{
    int r1,r2,c1,c2,sum = 0;
    cout<<"Enter The Number of Rows for Matrix 1 = ";
    cin>>r1;
    cout<<"Enter The Number of Columns for Matrix 1 = ";
    cin>>c1;
    cout<<"Enter The Number of Rows for Matrix 2 = ";
    cin>>r2;
    cout<<"Enter The Number of Columns for Matrix 2 = ";
    cin>>c2;

    int matrix1[r1][c1];
    int matrix2[r2][c2];
    int matrixSum[r1][c1];

    cout<<"\nInput Matrix 1 : \n";
    for(int row = 1; row <= r1; row++){
        for(int column = 1; column <= c1; column++){
            cin>>matrix1[row][column];
        }
    }

    cout<<"\nInput Matrix 2 : \n";
    for(int row = 1; row <= r2; row++){
        for(int column = 1; column <= c2; column++){
            cin>>matrix2[row][column];
        }
    }

    cout<<"\nSummation of The Two matrices : \n";
    if(r1 == r2 && c1==c2){
        for(int row = 1; row <= r1; row++){
            for(int column = 1; column <= c1; column++){
                sum = matrix1[row][column] + matrix2[row][column];
                matrixSum[row][column] = sum;
            }
            sum = 0;
        }

        for(int row = 1; row <= r1; row++){
            for(int column = 1; column <= c1; column++){
                cout<<matrixSum[row][column]<<"\t";
            }
            cout<<endl;
        }
    }
    else{
        cout<<"\nSummation is not possible! Since dimensions of the two matrices are different.\n";
    }


}
