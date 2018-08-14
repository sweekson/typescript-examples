
/**
 * Protected constructor
 *
 * (!) A constructor may also be marked protected.
 * This means that the class cannot be instantiated outside of its containing class
 */

class Person {
  protected name: string;
  protected constructor(name: string) { this.name = name; }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
}

let john = new Person('John'); // Error: The 'Person' constructor is protected
let howard = new Employee('Howard', 'Sales');