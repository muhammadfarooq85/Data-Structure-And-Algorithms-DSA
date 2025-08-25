#include <iostream>
using namespace std;

// print a pttern like that there will be 3 rows and 3 columns the order in each row will like A B C || B C D || C D E

int printPatternLikeABC()
{
    int rows = 1;
    while (rows <= 3)
    {
        int cols = 1;
        while (cols <= 3)
        {
            char ch = 'A' + rows + cols - 2;
            cout << ch << "  ";
            cols += 1;
        }
        cout << endl;
        rows += 1;
    }
    return 0;
};

// print a pattern in triangle shape that A || B B || C C C
int printPatternLikeABBCCC()
{
    int rows = 1;
    while (rows <= 3)
    {
        int cols = 1;
        char ch = 'A' + rows - 1;
        while (cols <= rows)
        {
            cout << ch << "  ";
            cols += 1;
        }
        cout << endl;
        rows += 1;
    }
    return 0;
};

// print a pattern in triangle shape so that A || B C || D E F || G H I J
int printAlphabetsInTriangle()
{
    int rows = 1;
    int count = 0;
    while (rows <= 4)
    {
        int cols = 1;
        while (cols <= rows)
        {
            char ch = 'A' + count;
            cout << ch << " ";
            count += 1;
            cols += 1;
        }
        cout << endl;
        rows += 1;
    }
    int cols = 1;
    return 0;
};

// print a pattern like that we have to start from H and ends on B in triangle pattern H || G F || F E D || E D C B
int printPatternLikeDCBA()
{
    int rows = 1;
    while (rows <= 4)
    {
        int cols = 1;
        int count = 8;
        while (cols <= rows)
        {
            char ch = 'A' + count - rows;
            // Row 1:-
            // 65 + 4 - 1; D
            // Row 2:-
            // 65 + 3 - 2; C
            // .............
            cout << ch << " ";
            count -= 1;
            cols += 1;
        }
        cout << endl;
        rows += 1;
    }
    return 0;
};

// print a pattern like that you have to start from D alphabet char and you have to end the last row column at this char
int printPatternLikeIncInRowsAndCols()
{
    int rows = 1;
    while (rows <= 4)
    {
        int cols = 1;
        int count = 4;
        while (cols <= rows)
        {
            char ch = 'A' + count - rows;
            // Row 1:-
            // 65 + 4 - 1 => 68
            // Row 2:-
            // 65 + 4 - 2 => 67
            // Row 3:-
            // 65 + 4 - 3 => 66
            // Row 4:-
            // 65 + 4 - 4 => 65
            cout << ch << " ";
            count += 1;
            cols += 1;
        }
        cout << endl;
        rows += 1;
    };
    return 0;
};

// print a pattern like that there will be 4 rows and 4 cols you have to follow the order like triangle shape but straight side will be on the right
int printTrianglePatternWithStraightLineOnRight()
{
    int rows = 1;
    while (rows <= 4)
    {
        int spaces = 4 - rows; // 1 rows means 3 spaces and 1 stars
        int stars = rows;      // row number will be the number of stars

        // Printing spaces
        int cols = 1;
        while (cols <= spaces)
        {
            cout << " ";
            cols += 1;
        };

        // Printing stars
        cols = 1;
        while (cols <= stars)
        {
            cout << "* ";
            cols += 1;
        };
        cout << endl;
        rows += 1;
    };
    return 0;
}

int main()
{
    // printPatternLikeABC();
    // printPatternLikeABBCCC();
    // printAlphabetsInTriangle();
    // printPatternLikeDCBA();
    // printPatternLikeIncInRowsAndCols();
    printTrianglePatternWithStraightLineOnRight();
    return 0;
};
