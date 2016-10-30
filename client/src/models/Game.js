const Area = require('./Area');
const Event = require('./Event');
const InventoryItem = require('./InventoryItem');

class Game {
  constructor({areas, focusArea, eventFeed, inventory}){
    this.areas = areas;
    this.focusArea = focusArea;
    this.eventFeed = eventFeed;
    this.inventory = inventory;

  }
  doAction(action){
    action.trigger.bind(this)();   
  }
}

module.exports = Game;