export default class VendItem {
  constructor(data) {
    this.id = data._id || Math.floor(Math.random() * 4000)
    this.name = data.name
    this.description = data.description
    this.price = data.price
    this.amount = data.amount
  }
  getTemplate() {
    return /*html*/`
    <div class="col-4 border border-primary rounded shadow my-2 py-2 mx-2 px-2">
      <h4>${this.name}</h4>
      <dl>
        ${this.description}
      </dl>
      <dl>
        Price: ${this.price}
      </dl>
      <dl>
        Available: ${this.amount}
      </dl>
      <button type="button" class="btn btn-outline-primary shadow" onclick="app.vendingController.buyItem(${this.id})">BUY</button>
    </div>
  `
  }
}