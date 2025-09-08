#include <iostream>
using namespace std;

// create a program  that waill alternate the values in array
// {1, 2,3 } => {2,1,3}

void swapAlternate(int arr[], int size)
{
    for (int num = 0; num < size; num += 2)
    {
        if (num + 1 < size)
        {
            // swap(arr[num], arr[num  +1]);
            int temp = arr[num];
            arr[num] = arr[num + 1];
            arr[num + 1] = temp;
        };
    };
    for (int i = 0; i < size; i++)
    {
        cout << " " << arr[i];
    }
    cout << endl;
}

int main()
{
    int arr[5] = {3, 2, 5, 1, 6};
    swapAlternate(arr, 5); // {2, 3, 1, 5, 6}
    return 0;
}