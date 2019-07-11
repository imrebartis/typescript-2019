const add = (a: number, b: number): number => {
  return a+b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
}

const throwError = (message: string): never => { // never means we won't execute the function completely
  throw new Error(message);
}