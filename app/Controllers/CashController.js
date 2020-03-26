import _cashService from '../Services/CashService.js'
import _store from '../store.js'


function _drawCash() {
  document.getElementById("money").innerText = '$' + _store.State.cash.toFixed(2)

}



export default class CashController {
  constructor() {
    console.log("Cash Controller")
    _drawCash()
  }

  addCash() {
    _cashService.addCash()
    _drawCash()
  }
}

