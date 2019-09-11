export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;


  sort(): void {
    const { length } = this;
    
    for (let item = 0; item < length; item++) {
      for (let j = 0; j< length - item - 1; j++) {
        if (this.compare(j, j + 1)) {
         this.swap(j, j + 1);
        }
      }
    }
  }
}