
/**
 * Readonly modifier
 *
 * (!) Readonly properties must be initialized at their declaration or in the constructor.
 */

class Square1 {
  public readonly width: number;
  constructor(width: number) {
    this.width = width * 10;
  }
}

let square = new Square1(10);
square.width; // 100
square.width = 20; // Error: Cannot assign to 'width' because it is a constant or a read-only property.

class Square2 {
  public readonly width: number;
  constructor(width: number) {
    this.initialize(width);
  }

  initialize(width) {
    this.width = width * 10; // Error: Cannot assign to 'width' because it is a constant or a read-only property.
  }
}