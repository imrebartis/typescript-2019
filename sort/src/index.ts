class Sorter {
  constructor( public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;
    
    for (let item = 0; item < length; item++) {
      for (let j = 0; j< length - item -1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);