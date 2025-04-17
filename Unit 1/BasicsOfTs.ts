//To run the file on terminal
//Step 1 : tsc BasicsOfts.ts
//Step 2 : node BasicsOfts.js

// 1. Datatypes and Variables

let userName: string = "John"; // String
let age: number = 25; // Number
let isStudent: boolean = true; // Boolean
let hobbies: string[] = ["reading", "gaming"]; // Array
let person: { name: string; age: number } = { name: "Alice", age: 30 }; // Object
let id: any = 123; // Any
let tuple: [string, number] = ["John", 25]; // Tuple
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

console.log("Username:", userName);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Hobbies:", hobbies);
console.log("Person:", person);
console.log("ID:", id);
console.log("Tuple:", tuple);
console.log("Color Enum Value (Green):", c);
console.log("Color Enum Name:", Color[c]);

// 2. Operators

// Arithmetic Operators
let a: number = 10;
let b: number = 3;

console.log(a + b); // Addition: 13
console.log(a - b); // Subtraction: 7
console.log(a * b); // Multiplication: 30
console.log(a / b); // Division: 3.333...
console.log(a % b); // Modulus: 1
console.log(a++);   // Increment: 10 (logs 10, then a becomes 11)
console.log(--b);   // Decrement: 2 (b becomes 2, then logs 2)

// Comparison Operators
let x: number = 5;
let y: string = "5";

console.log(x == Number(y));  // Loose equality: true (compares value)
console.log(x === Number(y)); // Strict equality: false (compares value and type)
console.log(x != Number(y));  // Loose inequality: false
console.log(x !== Number(y)); // Strict inequality: true
console.log(x > 4);   // Greater than: true
console.log(x < 6);   // Less than: true
console.log(x >= 5);  // Greater than or equal: true
console.log(x <= 4);  // Less than or equal: false

// Logical Operators
let isAdult: boolean = true;
let hasID: boolean = false;

console.log(isAdult && hasID); // AND: false (both must be true)
console.log(isAdult || hasID); // OR: true (at least one is true)
console.log(!isAdult);         // NOT: false (inverts the value)

// Bitwise Operators
let p: number = 5; // Binary: 0101
let q: number = 3; // Binary: 0011

console.log(p & q);   // AND: 1 (Binary: 0001)
console.log(p | q);   // OR: 7 (Binary: 0111)
console.log(p ^ q);   // XOR: 6 (Binary: 0110)
console.log(~p);      // NOT: -6 (Inverts bits, 2's complement)
console.log(p << 1);  // Left shift: 10 (Binary: 1010)
console.log(p >> 1);  // Right shift: 2 (Binary: 0010)
console.log(p >>> 1); // Unsigned right shift: 2 (Binary: 0010)

// Assignment Operators
let num: number = 10;

num = 20;       // Assignment: 20
num += 5;       // Add and assign: 25
num -= 10;      // Subtract and assign: 15
num *= 2;       // Multiply and assign: 30
num /= 3;       // Divide and assign: 10

console.log(num); // 10

// Ternary Operator
let stat: string = age >= 18 ? "Adult" : "Minor";

console.log(stat); // Adult

// 3. Decision Making and Loops
let score: number = 85;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}

let day: number = 2;
switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    default: console.log("Invalid");
}

for (let i: number = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

let i: number = 0;
while (i < 5) {
    console.log(i);
    i++;
}

let j: number = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 3)); // 8

let multiply = function(a: number, b: number): number {
    return a * b;
};
console.log(multiply(4, 2)); // 8

function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}
console.log(greet("John")); // Hello, John!
console.log(greet("John", "Hi")); // Hi, John!

