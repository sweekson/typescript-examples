
/**
 * Public, private, and protected modifiers
 */

class Person {
  /* public */ name: string; // (!) Each member is public by default.
  protected phone: string;
  private index: number = 0;
  /* public */ constructor(name: string, phone: string) {
    this.name = name;
    this.phone = phone;
  }
  /* public */ echo(message: string) {
    console.log(message);
  }
  protected sleep() {}
  private die() {}
}

let lily = new Person('Lily', '0987654321');
console.log(lily.name); // Lily
console.log(lily.phone); // Error: Property 'phone' is protected
console.log(lily.index); // Error: Property 'index' is private

class Child2 extends Person {
  /* Override modifier */
  public echo (message: string) {
    console.log(this.name); // Access public property
    console.log(this.phone); // Access protected property
    super.echo(message);
  }
}

class Child3 extends Person { // Error: Property 'sleep' is private in type 'Child3' but not in type 'Person'.
  private sleep(){
    this.index = 0; // Error: Property 'index' is private
    this.die(); // Error: Property 'die' does not exist
  }
}
