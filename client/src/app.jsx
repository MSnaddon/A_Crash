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
  let events = [new Event("Started Testing"), new Event("continuing testing")];
  let inventoryItems = {
    food: {
      fruit: new InventoryItem("fruit",2), 
      meat: new InventoryItem("meat", 4)
    },
    weapons: {sword: new InventoryItem("sword", 0)}
  };
  
  let gatherFruit = new Action("Gather Fruit",function(){
    this.inventory.food.fruit.quantity += 5;
    this.eventFeed.push(new Event("you gather fruit"));
  });

  let hunt = new Action("Hunt",function(){
    this.inventory.food.meat.quantity += 3;
    this.eventFeed.push(new Event("you hunt some meat"));
  });

  let eatFood = new Action("Eat",function(){
    if (this.inventory.food.fruit.quantity) {
      this.inventory.food.fruit.quantity -= 1;
      this.eventFeed.push(new Event("you eat some fruit"));
    } 
    else if (this.inventory.food.meat.quantity){
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
  
  let learnHunting = new Action("Learn to Hunt", function(){
    this.areas.forest.actions.hunt = new Action("Hunt +", function(){
      this.inventory.food.meat.quantity += 10
    }) 
  })

  let areas = {
    hQ: new Area("HeadQuarters", {
      forgeSword: forgeSword, 
      eat: eatFood
    }),
    forest: new Area("Forest", {
      gatherFruit: gatherFruit, 
      hunt: hunt
    }),
    plains: new Area("Plains", {
      leanrHunting: learnHunting
    })
  };

  return {
    areas: areas,
    eventFeed: events,
    inventory: inventoryItems
  }
}