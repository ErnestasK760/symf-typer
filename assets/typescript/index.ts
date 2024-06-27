// index.ts

// Define an interface for a person
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

// Function to greet a person
function greet(person: Person): string {
  return `Hello, ${person.firstName} ${person.lastName}! You are ${person.age} years old.`;
}

// Create a class representing a student
class Student {
  constructor(public firstName: string, public lastName: string, public age: number, public grade: number) {}

  getDetails(): string {
    return `${this.firstName} ${this.lastName} is in grade ${this.grade} and is ${this.age} years old.`;
  }
}

// Create a new person
const person: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

// Greet the person
console.log(greet(person));

// Create a new student
const student = new Student("Jane", "Smith", 20, 12);

// Get student details
console.log(student.getDetails());
