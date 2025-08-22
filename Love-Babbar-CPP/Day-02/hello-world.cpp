// What is compiler?

// compiler is a program that converts source code written in a high-level programming language into machine code, bytecode or another programming language. In this case, we are using C++ compiler to compile our C++ code.

// What is C++?

// C++ is a general-purpose programming language created by Bjarne Stroustrup at Bell Labs in Murray Hill, New Jersey, United States, and first released in 1985.

#include<iostream>
using namespace std;

int a = 5; // 4byte ===> 32bit
char b = 'a'; // 1byte ===> 8bit
bool c = true; // 1byte ===> 8bit
float d = 1.3; // 4byte ===> 32bit
double f = 1.23; // 8byte ===> 64bit

int hello (){
    cout << "Hello World From hello!" << endl;
    return 12;
};

int main () {
    hello();
    cout << "Hello Dunya!" << "\n";
    cout << "Hello Farooq!" << endl;
    cout << a << endl;
    cout << sizeof(a) << endl;
    cout << sizeof(b) << endl;
    cout << sizeof(c) << endl;
    cout << sizeof(d) << endl;
    cout << sizeof(f) << endl;

    float divide = 2.0 / 5;
    cout << divide << endl;
    cout << (a == b) << endl; // 0
    cout << (a != b) << endl; // 1
    cout << (a > b) << endl; // 0
    cout << (a < b) << endl; // 1
    cout << (a <= b) << endl; // 1
    cout << (a >= b) << endl; // 0
};

// Modulous Operator
// Arthematic Operator
// Relational Operators
// Logical Operator