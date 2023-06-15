export default class UserSelection {
  constructor() {
    this.model = null;
    this.color = null;
    this.accessories = [];
  }

  getTotalPrice() {
    let total = this.model.basePrice;
    total += this.color.price;
    this.accessories.forEach((accessory) => {
      total += accessory.price;
    });
    return total;
  }

  addAccessory(accessory) {
    this.accessories.push(accessory);
  }
}
