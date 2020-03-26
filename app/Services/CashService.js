import _store from '../store.js'

class CashService {
  addCash() {
    _store.State.cash += 0.25
  }

  constructor() {
    console.log("Cash Service");

  }
}

const CASHSERVICE = new CashService()
export default CASHSERVICE