#include <iostream>
using namespace std;

// Switch Case:
int isPass(int n)
{
    switch (n)
    {
    case 33:
        cout <<  "Pass" << endl;
        break;
    default:
        cout << "Fail" << endl;
        break;
    }
    return 0;
};

int main()
{
    // isPass(4);
    return 0;
}