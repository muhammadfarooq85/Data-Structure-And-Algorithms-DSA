#include <iostream>
using namespace std;

// print a pattern like that there will be 4 rows then 4 columnns in the each row then the order like this in each row 1, 2, 3, 4
int printPatternLike1234()
{
    int rows = 1;
    // Rows will start from 1 and end on 4:
    while (rows <= 4)
    {
        // Columns will start from 1 and end on 4:
        int columns = 1;
        while (columns <= 4)
        {
            cout << " " << columns << " ";
            // Incrementing col
            columns += 1;
        }
        // Printing
        cout << endl;
        // Incrementing row
        rows += 1;
    }
    return 0;
};

// print a pattern like that there will be 5 rows and 5 columns but you have to print like that 5. 6, 7, 8, 9 and then so on in the upcoming rows
int printPatternLike56789()
{
    int rows = 5;
    int count = 1;
    while (rows >= 1)
    {
        int columns = 5;
        while (columns >= 1)
        {
            cout << " " << count << " ";
            columns -= 1;
            count += 1;
        }
        cout << endl;
        rows -= 1;
    };
    return 0;
};

// print a pattern of traingle stars
int printPatternOfStarTriangle()
{
    int rows = 1;
    while (rows <= 5)
    {
        int columns = 1;
        int val = rows;
        while (columns <= rows)
        {
            // cout << " " << "*" << " ";
            cout << " " << val << " ";
            val -= 1;
            // val += 1;
            columns += 1;
        }
        cout << endl;
        rows += 1;
    }
    return 0;
};

// understanding this formula for (i - j + 1) where we have to print the pattern like in the first column of each row there will row number and then we will decrement the row number and move on and alos that column number will depend upon the row number
int printPatternToUnderstandIMinusJPlus1()
{
    // row ending point
    int n;
    cout << "Please enter the row number n:" << endl;
    cin >> n;
    // row starting point
    int row = 1;
    while (row <= n)
    {
        // column starting point
        int col = 1;
        // col depend upon the row number
        while (col <= row)
        {
            cout << " " << (row - col + 1) << " ";
            col += 1;
        }
        cout << endl;
        row += 1;
    };
    return 0;
};

// print the table from 1 to 10;
int printTable()
{
    int n = 1;
    while (n <= 10)
    {
        int nn = 1;
        while (nn <= 10)
        {
            cout << " " << n << " * " << nn << " = " << n * nn;
            cout << endl;
            nn += 1;
        }
        n += 1;
        cout << "Table of <" << n - 1 << "> is Printed Sucessfully!" << endl;
    };
    return 0;
};

// print a pattern like that we have nth number of rows and there will be nth number columns and we have to print like in 1st row A, A, A, A so on...
int printAlphabetsPattern()
{
    int row = 1;
    int count = 0;
    while (row <= 5)
    {
        int col = 1;
        // 1 => A: (65) + 1 - 1 => 65: => A
        // 2 => B: (65) + 2 - 1 => 66: => B
        // 2 => C: (65) + 3 - 1 => 67: => C
        // 2 => D: (65) + 4 - 1 => 68: => D
        // 2 => E: (65) + 5 - 1 => 69: => E
        while (col <= 5)
        {
            char ch = 'A' + count;
            cout << " " << ch << "  ";
            count += 1;
            col += 1;
        }
        cout << endl;
        row += 1;
    };
    return 0;
};

// Main function for running other functions
int main()
{
    // cout << "Hello From The Server!" << endl;
    // printPatternLike1234();
    // printPatternLike56789();
    // printPatternOfStarTriangle();
    // printPatternToUnderstandIMinusJPlus1();
    // printTable();
    printAlphabetsPattern();
    return 0;
}