#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

// Find all duplicates in the array
vector<int> findDuplicates(vector<int> &nums)
{
    vector<int> result;

    for (int i = 0; i < nums.size(); i++)
    {
        int index = abs(nums[i]) - 1;

        if (nums[index] < 0)
        {
            // already visited → duplicate
            result.push_back(index + 1);
        }
        else
        {
            // mark as visited by flipping sign
            nums[index] = -nums[index];
        }
    }

    return result;
}

// find the intersection elements between two arrays
void findIntersection(int nums1[], int n1, int nums2[], int n2)
{
    for (int i = 0; i < n1; i++)
    {
        for (int j = 0; j < n2; j++)
        {
            if (nums1[i] < nums2[j]){
                 break;
            }
            if (nums1[i] == nums2[j])
            {
                cout << nums1[i] << endl;
                nums1[i] = -12;
                break;
            };
        };
    };
};

int main()
{
    // vector<int> nums = {4, 3, 2, 7, 8, 2, 3, 1};
    // vector<int> duplicates = findDuplicates(nums);

    // cout << "Duplicates are: ";
    // for (int num : duplicates)
    // {
    //     cout << num << " ";
    // }
    // cout << endl;
    int nums1[4] = {1, 4, 5, 4};
    int nums2[2] = {4, 2};
    findIntersection(nums1, 5, nums2, 2);
    return 0;
}
