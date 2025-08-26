#include <iostream>
using namespace std;

// Bitwise operator
int bitWiseOperators()
{
    // AND
    cout << (0 && 1) << endl; // 0
    // OR
    cout << (0 || 1) << endl; // 1
    // NOT
    cout << (!1) << endl; // 0
    // XOR
    cout << (!1 && !1) << endl; // 0

    // Left Shift
    cout << (6 << 3) << endl;
    // Right Shift
    cout << (3 >> 2) << endl;

    // POST:INC
    int a = 4;
    int b = 5;
    cout << (a + b++) << endl; // 4 + 5 => 9
    cout << b << endl;         // 6

    // PRE:INC
    int c = 2;
    int d = 6;
    cout << ((c) + (++d)) << endl; // 2 + 7 => 9
    cout << d << endl;             // 7

    // POST:DEC
    int e = 7;
    int f = 2;
    cout << ((e--) - (f)) << endl; // 7 - 2 => 5
    cout << e << endl;             // 6

    // POST:DEC
    int g = 11;
    int h = 4;
    cout << ((g--) + (--h)) << endl; // 11 + 3 => 14
    cout << g << h << endl;          // 10 <=> 3

    //  PO:D + PR:D - PO:D + PO:INC
    cout << d << f << h << g << endl;
    int i = d-- + --f - h-- + g++; // 7 + 1 - 3 + 10 => 15
    cout << d << f << h << g << endl;
    cout << i << endl;

    return 0;
};

// For loop:
int printFrom1ToNthNumberUsingForLoop()
{
    int n;
    cout << "Please Enter any nth number n: to start looping from 1 to nth number" << endl;
    cin >> n;
    for (int i = 1; i <= n;)
    {
        i++; // 13
        cout << i << endl;
        // i++; // 12
    };
    return 0;
};

// solve a prblem where you have array of nums and other input is val you have to to remove all the occurrences of val in the nums
int removeValFromTheNums(int arr[], int size, int val)
{
    // initializing a count
    int k = 0;
    // looping through the each of element untill reach to the end of array;
    for (int i = 0; i < size; i++)
    {
        // comapring the elem of array to the given val to check if equal then not enter to block code if not then move on and finally return the count of those values that are not equal to the given val
        if (arr[i] != val)
        {
            // placing the elem of arr to the available position
            arr[k] = arr[i];
            // incrementing
            k += 1;
        };
    };
    // finally returning
    return k;
};



int main()
{
    // cout << "Hello..." << endl;
    // bitWiseOperators();
    // printFrom1ToNthNumberUsingForLoop();
    int arr[5] = {1, 3, 3, 3, 4};
    int size = sizeof(arr) / sizeof(arr[0]);
    int val = 3;
    int newSize = removeValFromTheNums(arr, size, val);
    cout << newSize << endl; // 2
    return 0;
}