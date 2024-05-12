type Func<T, U> = (...args: T[]) => U;

function once<T, U>(fn: Func<T, U>): Func<T, U | undefined> {
  let hasBeenCalled = false;
  let result: U;

  return function (...args: T[]): U | undefined {
    if (!hasBeenCalled) {
      result = fn(...args);
      hasBeenCalled = true;
      return result;
    } else {
      return undefined;
    }
  };
}

let fn = (a: number, b: number, c: number) => a + b + c;

const onceFunc = once(fn);
