
/**
 * Compatible
 */

class Person {
  constructor(public name: string) {}
}

class Staff {
  constructor(public name: string) {}
}

class User {
  constructor(private name: string) {}
}

class Human {
  constructor(private name: string) {}
}

class Engineer extends Staff {
  constructor(public name: string, public phone: string) {
    super(name);
  }
  coding(codes) {
    console.log(codes);
  }
}

let person = new Person('Person');
let staff = new Staff('Staff');
let user = new User('User');
let human = new Human('Human');
let mike = new Engineer('Mike', '0987654321');

person = staff; // (OK)
person = mike; // (OK)

staff = person; // (OK)
staff = mike; // (OK)

person = user; // Error: Type 'User' is not assignable to type 'Person'. Property 'name' is private in type 'User' but not in type 'Person'.
user = mike; // Error: Type 'Engineer' is not assignable to type 'User'. Property 'name' is private in type 'User' but not in type 'Engineer'.
user = human; // Error: Type 'Human' is not assignable to type 'User'. Types have separate declarations of a private property 'name'.
