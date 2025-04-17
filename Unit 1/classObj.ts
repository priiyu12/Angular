//To run the file on terminal
//Step 1 : tsc classObj.ts
//Step 2 : node classObj.js

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Holaa, I'm ${this.name}, and I'm ${this.age} years old.`;
    }
}

let person1 = new Person("Prii", 20);
console.log(person1.greet()); // Holaa, I'm Prii, and I'm 20 years old.

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    study(): string {
        return `${this.name} is eating her favourite ${this.grade}.`;
    }
}

let student1 = new Student("Prii", 20, "pizza");
console.log(student1.greet()); // Hi, I'm Priya, and I'm 20 years old.
console.log(student1.study()); // Priya is eating her favourite pizza.

interface User {
    id: number;
    name: string;
}

let user: User = { id: 1, name: "Priyoo" };

console.log(user.id)
console.log(user.name)