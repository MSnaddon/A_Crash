const Game = require('../Game')
const Area = require('../Area')
const Event = require('../Event')
const InventoryItem = require('../InventoryItem')
const Action = require('../Action')

var assert = require("assert");

describe("The game", function(){
  
  let game;

  beforeEach(()=>{
    game = new Game(options());
  })

  it("Should hold events in array", ()=>{
    assert.equal(game.eventFeed[0].description, "Started Testing")
  })

  


})

// for test
// Events will have "started testing" and "continue testing" 
// Inventory items have catagory food and weapons with fruit and meat in food and sword in weapons
// Actions will include gather fruit, hunt, eat and forge sword
// Areas will include HQ and CryoBank


function options(){
  let events = [new Event("Started Testing"), new Event("continuing testing")];
  let inventoryItems = {
    food: {
      fruit: new InventoryItem("fruit",2), 
      meat: new InventoryItem("meat", 4)
    },
    weapons: {swords: new InventoryItem("sword")}
  };
  
  let gatherFruit = new Action(function(){
    this.inventory.food.fruit.quantity += 5;
    this.eventFeed.push(new Event("you gather fruit"));
  });

  let hunt = new Action(function(){
    this.inventory.food.meat.quantity += 3;
    this.eventFeed.push(new Event("you hunt some meat"));
  });

  let eatFood = new Action(function(){
    if (this.inventory.fruit) {
      this.inventory.food.fruit.quantity -= 1;
      this.eventFeed.push(new Event("you eat some fruit"));
    } 
    else if (this.inventory.meat){
      this.inventory.food.meat.quantity -= 1;
      this.eventFeed.push(new Event("you eat some meat"));
    } 
    else {
      this.eventFeed.push(new Event("You have no food to eat"));
    }
  });

  let forgeSword = new Action(function(){
    this.inventory.weapons.swords.quantity += 1;
    this.eventFeed.push(new Event("You forge a metal stick, Waaay"));
  });
  
  let areas = {
    hQ: new Area("HeadQuarters", forgeSword, eatFood),
    forest: new Area("Forest", gatherFruit, hunt)
  };
  
  return {
    areas: areas,
    focusArea: areas.hQ,
    eventFeed: events,
    inventory: inventoryItems
  }
}