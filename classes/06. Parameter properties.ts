
/**
 * Parameter properties
 */

class Person {
  constructor (
    public name: string = 'Default',
    private phone: string,
    protected address: string,
    protected readonly type: number,
    /* public */ readonly alive: boolean = true
  ) {}
}

class Person2 {
  public name: string;
  constructor (
    public name: string, // Error: Duplicate identifier
    phone: string // Warning: Not a property
  ) {}
}