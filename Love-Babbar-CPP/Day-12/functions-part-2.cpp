#include <iostream>
using namespace std;

// write a program that check if the number is odd or even
int isOdd(int num)
{
    if (num & 1)
    {
        return 0;
    }

    return 1;
};

long long factorial(int n)
{
    long long fact = 1;
    for (int i = 1; i <= n; ++i)
    {
        fact *= i;
    }
    return fact;
}

// write program to check nCr
long long nCr(int n, int r)
{
    if (r > n)
        return 0;
    return factorial(n) / (factorial(r) * factorial(n - r));
}

// write a program to print counting
void printCounting()
{
    for (int i = 1; i <= 100; i++)
    {
        cout << i << endl;
    }
}

// write a program to check to check if the number is prime or not
bool isPrime(int n){
    for (int i = 2; i < n; i++)
    {
        if(n % i == 0){
            return false;
        };
    };
    return true;
}

int main()
{
    // int result = isOdd(2);
    // if(result == 1){
    //     cout <<"Number is Even!" << endl;
    // }else {
    //     cout <<"Number is Odd!" << endl;
    // }

    // int n, r;
    // cout << "Enter n (total items): ";
    // cin >> n;
    // cout << "Enter r (items to choose): ";
    // cin >> r;
    // cout << "The value of " << n << "C" << r << " is: " << nCr(n, r) << std::endl;
    printCounting();
    return 0;
}