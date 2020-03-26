import _cashService from '../Services/CashService.js'
import _store from '../store.js'


function _drawCash() {

}



export default class CashController {
  constructor() {
    console.log("Cash Controller")
    _drawCash()
  }

  addCash() {
    _cashService.addCash()
  }
}

