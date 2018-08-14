
/**
 * Parameter properties
 */

class Person {
  constructor (
    public name: string,
    private phone: string,
    protected address: string,
    protected readonly type: number,
    /* public */ readonly alive: boolean
  ) {}
}

class Person2 {
  public name: string;
  constructor (
    public name: string, // Error: Duplicate identifier
    phone: string // Warning: Not a property
  ) {}
}