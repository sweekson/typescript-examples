
function toHex(value: string): string { return value; }

/**
 * Accessors
 *
 * (!) Accessors require you to set the compiler to output ECMAScript 5 or higher.
 */

class Circle1 {
  constructor(
    public radius: number,
    public _colour: string,
    private _border: number
  ) {}

  get area(): number {
    return this.radius * this.radius * Math.PI;
  }

  get color(): string {
    return this._colour;
  }

  set color(value: string) {
    this._colour = toHex(value);
  }

  // (!) Accessors with a get and no set are automatically inferred to be readonly
  get border(): number {
    return this._border;
  }
}

class Circle2 {
  constructor(public radius: number, public _color: string, private _border: number) {}
  get area() {} // Error: A 'get' accessor must return a value.
  set color() {} // Error: A 'set' accessor must have exactly one parameter.
  get border(val: number) { return this._border; } // Error: A 'get' accessor cannot have parameters.
}