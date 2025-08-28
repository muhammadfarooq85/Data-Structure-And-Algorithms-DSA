#include <iostream>
using namespace std;

int guessOutput1()
{
    for (int i = 0; i <= 5; i--)
    {
        cout << i << endl;
        i++;
    }
    return 0;
};

int guessOutput2()
{
    for (int i = 0; i <= 5; i++)
    {
        for (int j = i; j <= 5; j++)
        {
            cout << i << " " << j << endl;
        }
    }

    return 0;
};

int guessOutput3()
{

    for (int i = 0; i < 5; i++)
    {
        for (int j = i; j <= 5; j++)
        {
            if (i + j == 10)
            {
                break;
            }
            cout << i << " " << j << endl;
        };
    };
    return 0;
};

#include <math.h>
// write a program that will conver the number into the binary system
int convertIntToBinary()
{
    int n;
    cout << "Enter any number to convert into the binary: ";
    cin >> n;
    int oN = n;
    // returning binary system
    int ans = 0;
    // initializing i
    int i = 0;
    while (n != 0)
    {
        // spearating bit
        int bit = n & 1;
        cout << "bit is " << bit << endl;
        //
        ans = (bit * pow(10, i) + ans);
        // right shift
        n = n >> 1;
        // going on the next bit
        i++;
    };
    cout << "Binary system of: <" << oN << "> is: <" << ans << ">" << endl;
    return 0;
};

// write a program that will conver the binary into the decimal numbering system
int convertBinaryToDecimal()
{
    int n;
    cout << "Enter any number to n: " << endl;
    cin >> n;
    int ans = 0;
    int i = 0;
    while (n != 0)
    {
        int digit = n % 10;
        if (digit == 1)
        {
            ans = ans + pow(2, i);
        }
        n = n / 10;
        i++;
    };
    cout << ans << " " << endl;
    return 0;
};

int main()
{
    // guessOutput1();
    // guessOutput2();
    // guessOutput3();
    // convertIntToBinary();
    convertBinaryToDecimal();
    return 0;
}