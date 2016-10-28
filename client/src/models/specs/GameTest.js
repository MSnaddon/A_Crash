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

function options(){
  return {

  }
}