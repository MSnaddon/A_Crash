const Area = require('./Area');
const Event = require('./Event');
const InventoryItem = require('./InventoryItem');

class Game{
  constructor({areas, eventFeed, inventory, progressions}){
    this.areas = areas;
    this.eventFeed = eventFeed;
    this.inventory = inventory;
    this.progressions = progressions
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
  checkProgression(){
    for(let key in this.progressions){
      let goal = this.progressions[key]
      if(goal.isPastThreshold.bind(this)(goal)){
        this.doAction.bind(this)(goal.advanceAction);
      }
    }
  }
}

module.exports = Game;