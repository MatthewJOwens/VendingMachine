import VendItem from "../Models/VendItem.js"
import _store from "../store.js"

// PRIVATE



// PUBLIC
export default class VendingService {
  constructor() {
    // console.log("Hello from VendingService");
  }
  get Items() {
    return _store.State.items.map(item => new VendItem(item))
  }

  get Cart() {
    return _store.State.cart
  }
  buyItem(newItem) {
    console.log("buying from Service");

    let item = _store.State.items.find(x => x.id == newItem)
    if (_store.State.cash > item.price && item.amount > 0) {
      _store.State.cash -= item.price
      item.amount--
      _store.State.cart = item.name
    }
  }

}

