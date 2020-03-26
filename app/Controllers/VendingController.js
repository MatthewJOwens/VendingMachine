import VendingService from "../services/VendingService.js";

// PRIVATE
let _vendingService = new VendingService();

function _draw() {
  let template = ''
  let vendItem = _vendingService.Items

  vendItem.forEach((item) => template += item.getTemplate())
  document.querySelector("#vend-item").innerHTML = template
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
  }
}