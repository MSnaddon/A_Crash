const Area = require('./Area');
const Event = require('./Event');
const InventoryItem = require('./InventoryItem');

class Game {
  constructor({areas, eventFeed, inventory}){
    this.areas = areas;
    this.eventFeed = eventFeed;
    this.inventory = inventory;
    this.supply = {};

    this.populateSupplyWithInventory();

  }
  populateSupplyWithInventory(){
    for(let catagory in this.inventory) {
      this.supply[catagory]={}
    };
  }
  doAction(action){
    action.trigger.bind(this)();
  }
}

module.exports = Game;