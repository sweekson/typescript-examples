
/**
 * Classes
 *
 * Traditional JavaScript uses functions and prototype-based inheritance to build up reusable components.
 * Starting with ES6, it is able to build applications using object-oriented class-based approach.
 */

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeter = new Greeter('world');
greeter.greet(); // Hello, world

class Greeter2 {
  constructor(message: string) {
    this.greeting = message; // Error: Property 'greeting' does not exist
  }
}
