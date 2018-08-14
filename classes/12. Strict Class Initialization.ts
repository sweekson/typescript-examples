
/**
 * Strict Class Initialization
 * --strictPropertyInitialization
 */

class C {
  foo: number;
  bar/*: string */ = 'hello';
  baz: boolean; // Error: Property 'baz' has no initializer and is not definitely assigned in the constructor.
  constructor() {
    this.foo = 42;
  }
}

class D {
  foo: number;
  bar = 'hello';
  // If we truly meant for baz to potentially be undefined,
  // we should have declared it with the type boolean | undefined.
  baz: boolean | undefined;
  constructor() {
    this.foo = 42;
  }
}

// Definite Assignment Assertions
// --strict
// --strictPropertyInitialization
class E {
  // TypeScript allows a ! to be placed after instance property
  foo!: number;

  constructor() {
    this.initialize();
  }

  initialize() {
    this.foo = 0;
  }
}