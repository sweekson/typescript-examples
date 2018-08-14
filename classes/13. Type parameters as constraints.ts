
/**
 * Type parameters as constraints
 */

function assign<T extends U, U>(target: T, source: U): T {
  Object.keys(source).forEach(key => target[key] = source[key]);
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };
assign(x, { b: 10, d: 20 });
assign(x, { e: 0 });  // Error