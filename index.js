// Base class: Person
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // Method to print details
    printDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
}

// Derived class: Student
class Student extends Person {
    constructor(name, age, gender, rollNo) {
        super(name, age, gender); // Call the constructor of the parent class
        this.rollNo = rollNo;

        // Validate roll number
        if (this.rollNo <= 0) {
            throw new Error(`${this.name} Roll number must be a positive integer greater than zero.`);
        }
    }

    // Overriding the printDetails method
    printDetails() {
        super.printDetails(); // Call the parent class's method
        console.log(`Roll No: ${this.rollNo}`);
    }

    // Additional method to get student information
    getStudentInfo() {
        return `${this.name} is a student with roll number ${this.rollNo}.`;
    }
}

// Demonstration
try {
    const student1 = new Student('Snehal', 20, 'Female', 39);
    student1.printDetails(); // Using overridden method
    console.log(student1.getStudentInfo());
    
    // This will throw an error
    const student2 = new Student('Jyoti', 22, 'Female', 0);
    student2.printDetails(); // This line won't execute due to the exception
} catch (error) {
    console.error(error.message);// Handle the exception
    
  
}
