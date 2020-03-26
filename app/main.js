import ValuesController from "./Controllers/ValuesController.js";
import CashController from "./Controllers/CashController.js"
import VendingController from "./Controllers/VendingController.js"
import CartController from "./Controllers/CartController.js"

class App {
  valuesController = new ValuesController();
  cashController = new CashController();
  vendingController = new VendingController();
  cartController = new CartController();
}

window["app"] = new App();
