import Value from "./Models/Value.js";
import VendItem from "./Models/VendItem.js";

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  cash: 100.00,
  cart: [],
  /**@type {VendItem[]} */
  items: [
    new VendItem({
      name: "Fruit Snack Gummies",
      description: "Fruit salad done right.",
      price: 1.00,
      amount: 45
    }),
    new VendItem({
      name: "Plant Food",
      description: "Are you hungry? I could use a light snack.",
      price: 5.00,
      amount: 20
    }),
    new VendItem({
      name: "Admiral-able Ack-Bar",
      description: "Snack like an Admiral.",
      price: .75,
      amount: 3
    }),
    new VendItem({
      name: "Paranormal Snacktivity",
      description: "The perfect midnight snack.",
      price: .25,
      amount: 7
    }),
    new VendItem({
      name: "The Void",
      description: "This snack eats you!",
      price: 3.25,
      amount: 1
    })
  ]
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
