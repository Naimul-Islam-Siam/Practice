#include <stdio.h>

int main() {
   int arr[5] = {2, 4, 5, 8, 1};
   
   // will produce the same output (address of the first element of arr)
   printf("%d\n", arr);
   printf("%d\n", &arr);
   printf("%d\n", &arr[0]);
   
   // same output (value of the first element of arr)
   printf("%d\n", *arr);
   printf("%d\n", arr[0]);
   
   // same output (address of the second element of arr)
   printf("%d\n", arr+1);
   printf("%d\n", &arr[1]);
   
   // same output (value of the second element of arr)
   printf("%d\n", *(arr+1));
   printf("%d\n", arr[1]);
}