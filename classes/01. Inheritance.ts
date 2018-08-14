
/**
 * Inheritance
 */

// Superclasses
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  echo(message: string) {
    console.log('Human: ' + message);
  }
}

// Subclasses
class Child1 extends Person {}

class Child2 extends Person {
  constructor(name: string){
    super(name);
  }
  // Override methods
  echo(message: string) {
    console.log('Child2: ' + message);
  }
}

class Child3 extends Person {
  phone: string
  constructor(name: string, phone: string){
    super(name);
    this.phone = phone;
  }
  // Override methods
  echo(message: string) {
    console.log('Child3');
    super.echo('Child3: ' + message);
  }
  sleep() {}
}

let john = new Person('John');
let mary: Person = new Child2('Mary');
let bill: Person = new Child3('Bill', '0987654321');

john.echo('hihi'); // Human: hihi
mary.echo('hihi'); // Child2: hihi
bill.echo('hihi'); // Child3 // Human: Child3: hihi

// (!) Before we ever access a property on this in a constructor body, we have to call super().
class Child4 extends Person {
  phone: string;
  constructor(phone: string){
    this.phone = phone; // Error: 'super' must be called before accessing 'this' in the constructor of a derived class.
    super('Child4');
  }
}
