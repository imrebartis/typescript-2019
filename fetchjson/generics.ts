class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnything<string>(["a", "b"]);

// example of generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(["a", "b", "c"]);
printAnything<number>([1, 2, 3]);

// generic constraints
class Bar {
  print() {
    console.log("I am a bar");
  }
}

class Foo {
  print() {
    console.log("I am a foo");
  }
}

interface Printable {
  print(): void;
}

function printFoosOrBars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printFoosOrBars<Foo>([new Foo(), new Foo()]);
printFoosOrBars<Bar>([new Bar(), new Bar()]);
