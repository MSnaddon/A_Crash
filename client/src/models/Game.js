const Area = require('./Area');
const Event = require('./Event');
const InventoryItem = require('InventoryItem');

class Game {
  constructor(){
    this.areaSelection = [new Area("Dark Room"), new Area("Cryo bank")];
    this.focusArea = this.areaSelection[0];
    this.actions = this.focusArea.actions;
    this.events = [
      new Event("Said hello to world"), 
      new Event("Realise your're just a line of text, but a good line of text")
    ];
    this.inventory = {
      fuel: [new InventoryItem("Bio-fuel")]
      weapons: [new InventoryItem("stick"), new InventoryItem("big stick")]
    }

    console.log(this.areaSelection)
    console.log(this.focusArea)
    console.log(this.actions)
    console.log(this.events)
    console.log(this.inventory)

  } 
}

module.exports = Game;