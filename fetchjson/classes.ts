class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car('orange');
car.startDrivingProcess();
// car.honk(); // no can do: honk() can be used only in Vehicle or its subclasses, since it's protected & not public

console.log(car.color);