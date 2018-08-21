
/**
 * Abstract Classes
 *
 * An abstract class may contain implementation details for its members.
 */

abstract class Employee {
  constructor(public name: string) {}
  // (!) Methods within an abstract class that are marked as abstract do not contain an implementation and must be implemented in derived classes.
  abstract work(): void;
  protected abstract sleep(): void;
}

class Developer extends Employee {
  work() {}
  protected sleep() {}
}

class Developer2 extends Employee {
  public work() {}
  public sleep() {}
}

// Error: Non-abstract class 'Engineer' does not implement inherited abstract member 'work' from class 'Employee'.
class Engineer extends Employee {
  protected sleep() {}
}
