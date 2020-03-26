import VendingService from "../services/VendingService.js";
import _store from "../store.js"

// PRIVATE
let _vendingService = new VendingService();

function _draw() {
  let template = ''
  let vendItem = _vendingService.Items

  vendItem.forEach((item) => template += item.getTemplate())
  document.querySelector("#vend-item").innerHTML = template

  let cart = ''
  let cartItem = _vendingService.Cart

  cart += _vendingService.Cart
  document.querySelector("#cart-item").innerHTML = cart
}

// PUBLIC

export default class VendingController {
  constructor() {
    // console.log("Hello from VendingController")
    _draw()
  }

  buyItem(id) {
    _vendingService.buyItem(id)
    console.log("buying from Controller");
    _draw()
    document.getElementById("money").innerText = '$' + _store.State.cash.toFixed(2)

  }
}