// Assignment 1

// 1. Create an array of string and print array in reverse manner. [Use for loop and lenght function]
let fruits: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape'];
for(let i = fruits.length; i >=0; i--){
    console.log(fruits[i]);
}

//2. Create four function namely addition, subtraction, multiplication and division. Perform the calculation on two numbers accordingly.
function addition(num1: number, num2: number): number{
    return num1+num2;
}
function subtraction(num1: number, num2: number): number{
    return num1-num2;
}
function division(num1: number, num2: number): number{
    return num1/num2;
}
function multiplication(num1: number, num2: number): number{
    return num1*num2;
}

//3. Create a typescript program which demonstarates let and var keyword.
console.log(addition(10, 5)); 
console.log(subtraction(10, 5)); 
console.log(division(10, 5)); 
console.log(multiplication(10, 5));

function demoScope() {
    var x = 10;
    let y = 20;

    if (true) {
        var x = 30; // Function-scoped
        let y = 40; // Block-scoped
        console.log("Inside block x:", x);
        console.log("Inside block y:", y);
    }

    console.log("Outside block x:", x); // Affected
    console.log("Outside block y:", y); // Unaffected
}

demoScope();

//4. Create an anonymous function in typescript which calculates square of a number.
let square = function(num: number): number {
    return num*num;
}
console.log("Square of 5 : ", square(5));

//5. Create a Function for calculating factorial of a number [Use Parameter and Return Type concept]
function factorial(num: number): number {
    if(num ==0 || num == 1){
        return 1;
    }
    else{
        return num * factorial(num-1);
    }
}

console.log("Factorial of 5 : ", factorial(5));

//6. Create a typescript program which shows toFixed and toStirng function uses. 
let num: number = 123.456;

console.log(num.toFixed(2));  // "123.46"
console.log(num.toString());  // "123.456"

//7. Create a typescript program which shows charAt, concat, indexOf, replace, toUppercase, toLowerCase function uses.
let str: string = "Hello People! I'm Angular TypeScript";

console.log(str.charAt(0));           // 'H'
console.log(str.concat(" Rocks"));    // 'Hello TypeScript Rocks'
console.log(str.indexOf("Type"));     // 6
console.log(str.replace("Type", "Java")); // 'Hello JavaScript'
console.log(str.toUpperCase());       // 'HELLO TYPESCRIPT'
console.log(str.toLowerCase());       // 'hello typescript'

//8. Create an array which shows sort, push, pop, concat function uses.
let arr1: number[] = [5, 3, 8, 1];
arr1.sort();       // [1, 3, 5, 8]
console.log(arr1);

arr1.push(10);     // [1, 3, 5, 8, 10]
console.log(arr1);

arr1.pop();        // [1, 3, 5, 8]
console.log(arr1);

let arr2: number[] = [9, 7];
let merged = arr1.concat(arr2); // [1, 3, 5, 8, 9, 7]
console.log(merged);

//9. Create a typescript to check whether no is odd or even.
let number = 7;
if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

//10. Create an array of string and traverse that array using for in loop.
let cities: string[] = ["Delhi", "Mumbai", "Chennai"];
for (let city in cities) {
    console.log(cities[city]);
}

//11. Create a typescript to print multiplicaton table of a number in following manner.
    //5 x 1 = 5
    //5 x 2 = 10 ... so on
    let num2 = 5;
    for (let i = 1; i <= 10; i++) {
        console.log(`${num2} x ${i} = ${num2 * i}`);
    }

//12. Create a student class with rollno, name and three subject marks (m1,m2,m3) data members along with that also make putdata member function to print student details. Make three object and access student variables and call putdata for them.
class Student {
    rollno: number;
    name: string;
    m1: number;
    m2: number;
    m3: number;

    constructor(rollno: number, name: string, m1: number, m2: number, m3: number) {
        this.rollno = rollno;
        this.name = name;
        this.m1 = m1;
        this.m2 = m2;
        this.m3 = m3;
    }

    putdata() {
        console.log(`Roll No: ${this.rollno}, Name: ${this.name}, Marks: ${this.m1}, ${this.m2}, ${this.m3}`);
    }
}

let s1 = new Student(1, "A", 80, 75, 90);
let s2 = new Student(2, "B", 70, 85, 65);
let s3 = new Student(3, "C", 88, 92, 79);

s1.putdata();
s2.putdata();
s3.putdata();

//13. Create a typescipt program which takes a variable as a number (1-12) and print itsappropiate month name
let monthNum = 4;
let months = ["January", "February", "March", "April", "May", "June", 
              "July", "August", "September", "October", "November", "December"];

if (monthNum >= 1 && monthNum <= 12) {
    console.log("Month:", months[monthNum - 1]);
} else {
    console.log("Invalid month");
}

//14. Create a typescipt program which print the following pattern
    // 1
    // 12
    // 123
    // 1234
    // 12345
    for (let i = 1; i <= 5; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += j;
        }
        console.log(line);
    }    

//15. Create a typescipt program which print the following pattern
    // *****
    // ****
    // ***
    // **
    // *
    for (let i = 5; i >= 1; i--) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            stars += "*";
        }
        console.log(stars);
    }
//16. Create a typescript program which takes a number and check whether it is prime or not.
function isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
let primeNum = 7;
if (isPrime(primeNum)) {
    console.log(primeNum + " is a prime number.");
}
else {
    console.log(primeNum + " is not a prime number.");
}
//17. Create a typescript program which takes a string and check whether it is palindrome or not.
function isPalindrome(str: string): boolean {
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome("madam") ? "madam is a palindrome." : "madam is not a palindrome."); 

//18. Create a typescript program which takes a string and check whether it is anagram or not.
function isAnagram(str1: string, str2: string): boolean {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
  }
console.log(isAnagram("listen", "silent") ? "Anagram" : "Not anagram");
  
//19. Create a typescript program which takes a string and count the number of vowels and consonants.
function countVowelsConsonants(str: string) {
    let v = 0, c = 0;
    for (let ch of str)
      if (/[a-zA-Z]/.test(ch))
        "aeiouAEIOU".includes(ch) ? v++ : c++;
    return { v, c };
  }
  const res = countVowelsConsonants("Hello World");
  console.log(`Vowels: ${res.v}, Consonants: ${res.c}`);

//20. Create a typescript program which takes a string and count the number of words.
function countWords(str: string): number {
    return str.trim().split(/\s+/).length;
  }
console.log("Words:", countWords("Hello, how are you?"));
  
//21. Create a typescript program which takes a string and count the number of spaces.
function countSpaces(str: string): number {
    return (str.match(/\s/g) || []).length;
  }
console.log("Spaces:", countSpaces("Hello World! How are you?"));

//22. Create a typescript program which check whether a number is armstrong or not.
function isArmstrong(num: number): boolean {
    let sum = 0;
    const digits = num.toString().split("").map(Number);
    const length = digits.length;

    for (let digit of digits) {
        sum += Math.pow(digit, length);
    }

    return sum === num;
}
let armstrongNum = 153;
if (isArmstrong(armstrongNum)) {
    console.log(armstrongNum + " is an Armstrong number.");
}
else {
    console.log(armstrongNum + " is not an Armstrong number.");
}


