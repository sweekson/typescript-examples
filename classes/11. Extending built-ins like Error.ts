
/**
 * https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
 * Extending built-ins like Error, Array, and Map may no longer work
 */

class FooError extends Error {
  constructor(message: string) {
    super(message);
  }
  hello() {
    return 'Hello ' + this.message;
  }
}

class FooError2 extends Error {
  constructor(message: string) {
    super(message);
    // (!) Set the prototype explicitly.
    // Object.setPrototypeOf(this, FooError2.prototype);
    Object.setPrototypeOf(this, new.target.prototype);
  }
  hello() {
    return 'Hello ' + this.message;
  }
}

new FooError('TS').hello(); // TypeError: error.hello is not a function
new FooError2('TS').hello(); // Hello TS