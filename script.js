// ES6
console.log("ES6");
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // Regular method to print details
  printDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
  }

  // Arrow function as a class method (member function)
  getDetails = () => {
    return `${this.name}, ${this.age} years old, ${this.gender}`;
  };
}

// Creating a Person object using the ES6 class
const person1 = new Person("Alice", 25, "Female");

// Using the methods
person1.printDetails();
console.log(person1.getDetails());

// -------------------------------------------------------------------------------
//   function constructor
console.log("Funciton constructor");

function PersonConstructor(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  // Regular function as a method
  this.printDetails = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
  };
}

// Creating a Person object using function constructor
const person2 = new PersonConstructor("Bob", 30, "Male");

// Using the method
person2.printDetails();

// -------------------------------------------------------------------------------
//   object literals
console.log("Object literal");
const person3 = {
  name: "Charlie",
  age: 28,
  gender: "Male",

  // Regular method
  printDetails() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
  },

  // Arrow function as a method
  getDetails: () => {
    // Arrow functions do not have their own this, so this will refer to the global object
    return `Name: ${person3.name}, Age: ${person3.age}, Gender: ${person3.gender}`;
  },
};

// Using the methods
person3.printDetails();
console.log(person3.getDetails());
