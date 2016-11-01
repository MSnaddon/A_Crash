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
const Progression = require('./models/Progression')

function options(){
  //define progression Actions
  let foodBonus = new Action( "#first gatherer gives 20 food", function(){
    this.inventory.food.fruit.quantity = this.inventory.food.fruit.quantity + 20 || 20
  })

  let announceFood = new Action( "#gathering 50 food adds Event",function(){
    this.eventFeed.push(new Event("That's a lot of fruit")) 
  })


  //define initial Progressions
  let hiredAGatherer = new Progression( "Hired first Gatherer", foodBonus, {
    actionHireGatherer: false
  });

  let haveAtLeastFiftyFruit = new Progression( "#Gathered 50 fruit", announceFood,{
    haveFiftyFood: function(){
      return this.inventory.food.fruit.quantity >= 50
    }
  })


  //define Area Actions
  let gatherFruit = new Action( "Gather Fruit",function(){
      this.inventory.food.fruit.quantity += 5;
      this.eventFeed.push( new Event( "You gather fruit" ) );
    }, 10000);

    let hunt = new Action("Hunt",function(){
      this.inventory.food.meat.quantity += 3;
      this.eventFeed.push( new Event( "You hunt some meat" ) );
    }, 10000);

    let eatFood = new Action("Eat",function(){
      if (this.inventory.food.fruit.quantity) {
        this.inventory.food.fruit.quantity -= 1;
        this.eventFeed.push(new Event("You eat some fruit"));
      } 
      else if (this.inventory.food.meat.quantity){
        this.inventory.food.meat.quantity -= 1;
        this.eventFeed.push(new Event("You eat some meat"));
      } 
      else {
        this.eventFeed.push(new Event("You have no food to eat"));
      }
    }, 10000);

    let forgeSword = new Action("Forge weapon",function(){
      this.inventory.weapons.sword.quantity += 1;
      this.eventFeed.push(new Event("You forge a metal stick, Waaay"));
    }, 10000);
    
    let learnHunting = new Action("Learn to Hunt Better", function(){
      this.areas.forest.actions.hunt = new Action("Hunt better", function(){
        this.inventory.food.meat.quantity += 10
      }) 


  // define areas
  let areas = {
    hQ: new Area("Headquarters", {
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

  //define default events
  let events = [new Event("Started Testing"), new Event("Continuing testing")];


  //define inventory
  let inventoryItems = {
    food: {
      fruit: new InventoryItem("fruit",2), 
      meat: new InventoryItem("meat", 4)
    },
    weapons: {sword: new InventoryItem("sword", 0)}
  };

  let progressions = {
    hiredAGatherer: hiredAGatherer,
    fiftyFruit: haveAtLeastFiftyFruit
  }


  return {
    areas: areas,
    eventFeed: events,
    inventory: inventoryItems,
    progressions: progressions
  }
}