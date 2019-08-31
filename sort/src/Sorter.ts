interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor( public collection: Sortable) {};

  sort(): void {
    const { length } = this.collection;
    
    for (let item = 0; item < length; item++) {
      for (let j = 0; j< length - item - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
         this.collection.swap(j, j + 1);
        }
      }
    }
  }
}