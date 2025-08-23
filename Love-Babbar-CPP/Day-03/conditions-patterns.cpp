
#include <iostream>
using namespace std;

// take two number and print throguh conditional statements that if a is greater then print a is answer otherwise b

int a = 5;
int b = 6;

int greaterORLess()
{
    if (a > b)
    {
        cout << "Answer is a." << endl;
    }
    else
    {
        cout << "Answer is b." << endl;
    };
    return 0;
};

// Print if a given number is positive or not
int isPositiveOrNegative(int n)
{
    if (n > 0)
    {
        cout << "Given number is Positive." << endl;
    }
    else if (n < 0)
    {
        cout << "Given number is Negative." << endl;
    }
    return 0;
};

// taking input using cin
int takingInputUsingCIn()
{
    int a, b;
    cout << "Enter the value of a:" << endl;
    cin >> a;
    cout << "Value of a is :" << a << endl;
    cout << "Enter the value of b:" << endl;
    cin >> b;
    cout << "Value of b is:" << b << endl;
    return 0;
};

// taking input using cin.get();
int takingInputUsingCDotGet()
{
    int c;
    cout << "Enter the value of c:" << endl;
    c = cin.get();
    cout << "Value of c is:" << c << endl;
    return 0;
};

// Loops
// while loop
// run untill when the consition is true

// Print couting from 0 to 5 using while loop
int runWhileLoop()
{
    int f = 0;
    while (f != 6)
    {
        cout << f << endl;
        f += 1;
    };
    return 0;
};

// take input n using cin and then sum up from 1 to n;
int sumUpUsingCIn()
{
    int n;
    cout << "Enter the number n:" << endl;
    cin >> n;
    int i = 1;
    int sum = 0;
    while (i <= n)
    {
        sum += i;
        i += 1;
    };
    cout << "Sum from <1> to " << "<" << n << ">" << " is " << "<" << sum << ">" << endl;
    return 0;
};

// take a number n and then you have to print sum of the even numbers from  1 to n like this 1, 2, 3, 4 so the sum of even number is 6.
int sumUpOfEvenNumbers()
{
    int n;
    cout << "Please Enter any number: " << endl;
    cin >> n;
    int sum = 0;
    int i = 1;
    while (i <= n)
    {
        // Checking if the nuumber is even. If even then sum up;
        if (i % 2 == 0)
        {
            sum += i;
        };
        i += 1;
        cout << i << endl;
    };
    cout << "Sum from <1> to " << "<" << n << ">" << " is " << "<" << sum << ">" << endl;
    return 0;
};

// print pattern in order like there will be 4 rows and 4 columns
int printEqualRowsAndColumnsStarPattern()
{
    int row = 1;
    cout << "Please wait! Patterns are ready for printing..." << endl;
    while (row <= 4)
    {
        cout << " * " << " * " << " * " << " * " << endl;
        row += 1;
    };
    cout << "Patterns are printed successfully!" << endl;
    return 0;
};

// print the pattern of stars like there will be 5 rows and in the one row there will be 1 star and then so on.... continue upto the 5 rows
int print5RowsStarsWith1IncrementInEachRow()
{
    int rows = 1;

    // first row means 1 star
    while (rows <= 1)
    {
        cout << "  " << " * " << "  " << endl;
        rows += 1;
    };

    // resetting the row number
    rows = 0;

    // second row means 2 star
    while (rows <= 2)
    {
        if (rows == 1)
        {
            cout << "  " << " * " << " * " << "  " << endl;
        };
        rows += 1;
    };

    // resetting the row number
    rows = 0;

    // three row menas three stars
    while (rows <= 3)
    {
        if (rows == 1)
        {
            cout << "  " << " * " << " * " << " * " << "  " << endl;
        }
        rows += 1;
    };

    // resetting the row number
    rows = 0;

    // four row means 4 stars
    while (rows <= 4)
    {
        if (rows == 1)
        {
            cout << "  " << " * " << " * " << " * " << " * " << "  " << endl;
        };
        rows += 1;
    };

    // resetting the row number
    rows = 0;

    // five row menas 5 stars
    while (rows <= 5)
    {
        if (rows == 1)
        {
            cout << "  " << " * " << " * " << " * " << " * " << "  " << endl;
        };
        rows += 1;
    };

    return 0;
}

// print a pattern like that there will be nth number of rows and then there will be 3 columns and in each column of that row you have to print the row number like
// 1 1 1
// 2 2 2
// 3 3 3

int printRowsNumber()
{
    int rows;
    cout << "Please enter row number n:" << endl;
    cin >> rows;
    cout << endl;
    int i = 1;

        // Row
    while (i <= rows)
    {
        // Column
        int j = i;
        while (j <= rows)
        {
            cout << " " << i << " ";
            j += 1;
        };
        cout << endl;
        i += 1;
    };
    return 0;
}

int main()
{
    // greaterORLess();
    // isPositiveOrNegative(4);
    // takingInputUsingCIn();
    // takingInputUsingCDotGet();
    // runWhileLoop();
    // sumUpUsingCIn();
    // sumUpOfEvenNumbers();
    // printEqualRowsAndColumnsStarPattern();
    // print5RowsStarsWith1IncrementInEachRow();
    printRowsNumber();
};
