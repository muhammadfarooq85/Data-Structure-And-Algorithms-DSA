#include <iostream>
using namespace std;

// write a program to sum up the arrays nums
int sum(int arr[], int n)
{
    int sum = 0;
    for (int num = 0; num < n; num++)
    {
        sum += arr[num];
    }
    return sum;
}

// What is Linear Search?
// Linear Search is a method for finding a particular value in a list that checks each element in sequence until the desired element is found or the list is exhausted.
// It is the simplest searching algorithm and is easy to implement.
// It is also known as Sequential Search.
// It works on both sorted and unsorted arrays.
// It is not the most efficient algorithm for large datasets, but it is simple and easy to understand.
// It is useful for small datasets or when the dataset is unsorted.

void linearSearch(int arr[], int n, int target)
{

    for (int num = 0; num < n; num++)
    {
        if (arr[num] == target)
        {
            cout << "ELement Found!" << endl;
            return;
        }
    }
    cout << "ELement Not Found!" << endl;
}

// reverse an array
int reverseArray(int arr[], int n)
{
    int start = 0;
    int end = n - 1;
    while (start <= end)
    {
        swap(arr[start], arr[end]);
        start++;
        end--;
    }
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
    // cout << arr << endl; // memory address
    return 0;
}

int main()
{
    int arr[5] = {+1, -5, +8, -4, -9};
    int n = sizeof(arr) / sizeof(int);
    // int result = sum(arr, n);
    // cout << result << endl;
    // linearSearch(arr, n, -5);
    reverseArray(arr, n);
    return 0;
}