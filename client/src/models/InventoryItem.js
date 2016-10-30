class InventoryItem{
  constructor(name, initialQuantity = 0){
    this.name = name;
    this.quantity = initialQuantity;
  }
}

module.exports = InventoryItem;