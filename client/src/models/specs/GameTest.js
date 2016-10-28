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

  it("should hold information about areas available", ()=>{

  })

  it ("should hold the currently focused area", ()=>{

  })

  it("should hold the actions available for the focused", ()=>{

  })

  it("should hold a list of previous events", ()=>{

  })

  it("should keep track of player's inventory", ()=>{

  })


})

// for test
// Events will have "started testing" and "continue testing" 
// Inventory items have catagory food and weapons with fruit and meat in food and sword in weapons
// Actions will include gather fruit, hunt, eat and forge sword
// Areas will include HQ and CryoBank


function options(){
  let events = [new Event("Started Testing"), new Event("continuing testing")]
  let InventoryItems = {
    food: [new InventoryItem("apples"), new InventoryItem("")],
    weapons: [new InventoryItem("sword")]
  }
  
  let Areas = [new Area("testArea1")]
  return {

  }
}