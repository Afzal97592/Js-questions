// Abstractions  :-) hiding unnecessary details
// 1. customer easy to use
// 2. better security
// 3. loosely coupled code

class CoffeeMachine {
  #waterLevel = 0; // private filed

  checkWaterLevel() {
    return this.#waterLevel > 0;
  }
  makeCoffee() {
    if (this.checkWaterLevel()) {
      console.log("making coffee");
      this.#waterLevel -= 50;
    } else {
      console.log("please add water level");
    }
  }
  fillWater(amount) {
    this.#waterLevel += amount;
    console.log("Water filled");
  }
}
const obj = new CoffeeMachine();
// console.log(obj);
// obj.makeCoffee();
// obj.fillWater(100);
// obj.makeCoffee();

// abstraction using closure

function onlineStore() {
  let products = [];
  function addProduct(product) {
    products.push(product);
  }
}
