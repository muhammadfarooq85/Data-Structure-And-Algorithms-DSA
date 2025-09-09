#include <iostream>
#include <bits/stdc++.h>
using namespace std;

// write a program to find the unique element using xor operator
int findUnique(int arr[], int n)
{
    int ans = 0;
    // 0 ^ 1 => 1
    // 1 ^ 1 => 0
    // 0 ^ 2 => 2
    for (int i = 0; i < n; i++)
    {
        ans = ans ^ arr[i];
    }
    cout << ans << endl;
    return ans;
}

// find unique occurrences
bool findUniqueOccurrences(vector<int> &arr)
{
    unordered_map<int, int> freq;

    // Step 1: Count frequencies
    for (int num : arr)
    {
        freq[num]++;
    }

    // Step 2: Put frequencies into a Set
    unordered_set<int> seen;
    for (auto &it : freq)
    {
        seen.insert(it.second);
    }

    // Step 3: Compare sizes
    cout << (freq.size() == seen.size()) << endl;
    return freq.size() == seen.size();
}


int main()
{
    vector<int> arr = {1, 1, 2};
    // findUnique(arr, 3);
    findUniqueOccurrences(arr);
    return 0;
}