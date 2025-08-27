#include <iostream>
using namespace std;

// print fibinacci number series from 1 to nth number using for loop
int printFibonacciUsingForLoop()
{
    int n;
    cout << "" << endl;
    // taking nth number from the user
    cin >> n;

    // taking two number as it is required to start the fibonacci series
    int a = 0;
    int b = 1;

    cout << a << endl;
    cout << b << endl;

    // starting loop
    for (int i = 1; i <= n; i++)
    {
        int thirdNumber = a + b;
        cout << thirdNumber << endl;
        a = b;
        b = thirdNumber;
    };

    return 0;
};

// write a program that check if the given number is prime or not
bool isPrimeNumber()
{
    int n;
    cout << "Please Enter any number to check if it is prime or not:" << endl;
    cin >> n;
    bool isPrime;
    for (int i = 2; i < n; i--)
    {
        if (n % i == 0)
        {
            isPrime = false;
            break;
        }
    };
    return isPrime = true;
};

int guessTheOutput1()
{
    for (int i = 1; i < 6; i++)
    {
        cout << i << endl;
        i++;
    };

    // OUTPUT: 1,2
    return 0;
}

// Scoping of variable
int testScoping()
{
    // cout << a << endl; // error

    int a = 10;
    if (true)
    {
        int a = 5;
        cout << a << endl; // 5
    };
    cout << a << endl; // 10
    // int a = 10; // error due ot again redfination of the variable
    return 0;
};

// operator precedence

int testOperatorPrecedence()
{
    // BODMAS => Brackets, Order, Division, Multiplication, Addition, Subtraction
    return 0;
}

// LEETCODE #1281:
int subtractProductAndSum(int n)
{
    int product = 1;
    int sum = 0;
    while (n != 0)
    {
        int rem = n % 10; // 234 => 4, 23 => 3, 2 => 2 => 0
        n = n / 10;       // 234 => 23 => 2 => 0
        product *= rem;
        sum += rem;
    }
    return product - sum; // 15
}

// LEETCODE 191:
int hammingWeight(int n)
{
    int count = 0;
    while (n != 0)
    {
        if (n & 1)
        {
            count++;
        };
        n = n >> 1;
    };
    return count;
}

int main()
{
    // cout << "HELLO..." << endl;
    // printFibonacciUsingForLoop();
    // int result = isPrimeNumber();
    // if (result == 1)
    // {
    //     cout << "It is a Prime Number!" << endl;
    // }
    // else
    // {
    //     cout << "It is a Not Prime Number!" << endl;
    // }
    // guessTheOutput1();
    // int result = subtractProductAndSum(234);
    // cout << result << endl;
    int result = hammingWeight(5);
    cout << result << endl;
    return 0;
}