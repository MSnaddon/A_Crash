const React = require('react');
const ReactDom = require('react-dom');

const Game = require('./models/Game')

const GameView = require("./components/GameView")

window.onload = () => {
  
  let game = new Game(options());

  ReactDom.render(<GameView gameObject={game}/>, document.querySelector("#main-container"));

}





























const Area = require('./models/Area')
const Event = require('./models/Event')
const InventoryItem = require('./models/InventoryItem')
const Action = require('./models/Action')

function options(){
  let events = [new Event("Started Testing"), new Event("Continuing testing")];
  let inventoryItems = {
    food: {
      fruit: new InventoryItem("Fruit",2), 
      meat: new InventoryItem("Meat", 4)
    },
    weapons: {sword: new InventoryItem("Sword", 0)}
  };
  
  let gatherFruit = new Action("Forage fruit",function(){
    this.inventory.food.fruit.quantity += 5;
    this.eventFeed.push(new Event("you gather fruit"));
  });

  let hunt = new Action("Hunt",function(){
    this.inventory.food.meat.quantity += 3;
    this.eventFeed.push(new Event("you hunt some meat"));
  });

  let eatFood = new Action("Eat",function(){
    console.log(this.inventory)
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

  let forgeSword = new Action("Forge weapon",function(){
    this.inventory.weapons.sword.quantity += 1;
    this.eventFeed.push(new Event("You forge a metal stick, Waaay"));
  });
  
  let areas = {
    hQ: new Area("HeadQuarters", forgeSword, eatFood),
    forest: new Area("Forest", gatherFruit, hunt)
  };

  return {
    areas: areas,
    eventFeed: events,
    inventory: inventoryItems
  }
}