const carMakers = ['datsun', 'trabant', 'lada'];
const someArray: string[] = [];

const dates = [new Date(), new Date()];

const moskovitches = [
  ['moskovitch1950'],
  ['moskovitch1960'],
  ['moskovitch1970']
];

const twoDimensionalArray: string[][] = [];

// help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(100);

// help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
})

