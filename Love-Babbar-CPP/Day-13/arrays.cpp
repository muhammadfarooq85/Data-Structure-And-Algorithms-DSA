#include <iostream>
using namespace std;

// What is array?
// Array is a collection of similar data types which can be stored in contiguous memory locations.
// Array elements can be accessed by using index.
// Array index starts from 0 to n-1, where n is the size of the array.
// Array can be of any data type like int, float, char, etc.
// Array can be of fixed size or dynamic size.
// Array can be one dimensional or multi dimensional.

int nums[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};       // one dimensional array
int matrix[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}; // two dimensional array

int arrays()
{
    cout << nums[4] << endl;      // 5
    cout << matrix[2][0] << endl; // 7
    return 0;
};

// print the array
void printTheArray(int arr[], int n)
{
    for (int num = 0; num < 10; num++)
    {
        cout << "Element at the index" << num << " is " << nums[num] << endl;
    };
};

// write a program that will check which number in the array is max
int whatMax(int arr[], int n)
{
    int max[1] = {arr[0]};
    for (int num = 0; num < n; num++)
    {
        if (arr[num] > max[0])
        {
            max[0] = arr[num];
        };
    };
    return max[0];
}

// write a program that will check which number in the array is min
int whatMin(int arr[], int n)
{
    int min[1] = {arr[0]};
    for (int num = 0; num < n; num++)
    {
        if (arr[num] < min[0])
        {
            min[0] = arr[num];
        };
    };
    return min[0];
}

int main()
{
    int hyper[10] = {100, 101};
    cout << hyper[0] << endl; // 0
    // cout << hyper[100] << endl; // abhi itna array bna hi nahi
    int lengthOfhyper = sizeof(hyper) / sizeof(int);
    cout << lengthOfhyper << endl; // 10, but length is 2. So, it is a problematic thing to extract the length
    // arrays();
    int n = sizeof(nums) / sizeof(int);
    // printTheArray(nums, n);
    int ans = whatMax(nums, n);
    cout << ans << " is greater number." << endl;
    int ans1 = whatMin(nums, n);
    cout << ans1 << " is less number." << endl;
    return 0;
}