export class PRODUCTS {
  constructor(name, quantity, img, unit, color, price) {
    this.id = `${new Date().getTime()}`
    this.name = name
    this.quantity = quantity
    this.img = img
    this.unit = unit
    this.color = color
    this.price = price
  }
}

