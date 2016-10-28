const Area = require('./Area');
const Event = require('./Event');
const InventoryItem = require('./InventoryItem');

class Game {
  constructor({areas, focusArea, eventFeed, inventory}){
    this.areas = areas;
    this.focusArea = focusArea;
    this.eventFeed = eventFeed;
    this.inventory = inventory;


    // console.log(this.areaSelection)
    // console.log(this.focusArea)
    // console.log(this.actions)
    // console.log(this.events)
    // console.log(this.inventory)

  } 
}

module.exports = Game;