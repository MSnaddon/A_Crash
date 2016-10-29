const Area = require('./Area');
const Event = require('./Event');
const InventoryItem = require('./InventoryItem');

class Game {
  constructor({areas, focusArea, eventFeed, inventory}){
    this.areas = areas;
    this.focusArea = focusArea;
    this.eventFeed = eventFeed;
    this.inventory = inventory;


    // console.log(this.areas)
    // console.log(this.focusArea)
    // console.log(this.eventFeed)
    // console.log(this.inventory)

  } 
}

module.exports = Game;