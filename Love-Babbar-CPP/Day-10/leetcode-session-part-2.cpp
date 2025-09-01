#include <iostream>
#include <math.h>
using namespace std;

// LEETCODE PROBLEM #1009
int bitwiseComplement(int n)
{
    int m = n;
    int mask = 0;

    if (n == 0)
    {
        return 1;
    }

    while (m != 0)
    {
        mask = (mask << 1) | 1;
        m = m >> 1;
    }

    int ans = (~n) & mask;
    return ans;
}

// LEETCODE PROBLEM #02
bool powerOfTwo(int n)
{

    for (int i = 0; i <= 30; i++)
    {
        int power = pow(2, i);
        if (power == n)
        {
            return true;
        };
    };
    return false;
}

int main()
{
    // int complement = bitwiseComplement(3);
    // cout << complement << endl;
    int power = powerOfTwo(5);
    cout << power  << endl;
    cout << "HELLO SERVER" << endl;
    return 0;
}
