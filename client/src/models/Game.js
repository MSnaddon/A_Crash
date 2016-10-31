const Area = require('./Area');
const Event = require('./Event');
const InventoryItem = require('./InventoryItem');

class Game{
  constructor({areas, eventFeed, inventory, goals}){
    this.areas = areas;
    this.eventFeed = eventFeed;
    this.inventory = inventory;
    this.goals = goals
    this.supply = {};

    this.populateSupplyWithInventory();

  }
  populateSupplyWithInventory(){
    for(let catagory in this.inventory){
      this.supply[catagory]={}
    };
  }
  supplyTick(){
    for(let catagory in this.supply){
      for (let item in this.supply[catagory]){
        this.inventory[catagory][item].quantity += this.supply[catagory][item] || 0;
      }
    }
  }
  doAction(action){
    action.trigger.bind(this)();
  }
  // checkProgress(){
  //   this.progress.isPastThreshold(this)
  // }
}

module.exports = Game;