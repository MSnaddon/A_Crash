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
  });

  let announceFood = new Action( "#gathering 50 food adds Event",function(){
    this.eventFeed.push(new Event("That's a lot of fruit")) 
  });

  let revealPlains = new Action ("#used 10 forest actions revealsPlains", function(){
    this.eventFeed.push(new Event("Exploring the forest has revealed a vast hunting ground"));
    this.areas.plains.available = true;
  });

  let revealHuntActions = new Action("#having sword reveals hunting", function(){
    console.log("hunt actions revealed")
    this.eventFeed.push(new Event("A weapon is great for hunting in wilds"));
    this.areas.forest.actions.hunt.available = true;
    this.areas.plains.actions.learnHunting.available = true;
    delete this.progressions.gotSword
  })

  //define initial Progressions
  let hiredAGatherer = new Progression( "Hired first Gatherer", foodBonus, {
    actionHireGatherer: false
  });

  let haveAtLeastFiftyFruit = new Progression( "Gathered 50 fruit", announceFood,{
    haveFiftyFood: function(){
      return this.inventory.food.fruit.quantity >= 50
    }
  });

  let exploredForest = new Progression( "revealPlains", revealPlains, {
    doneTenForestActions: function(){
      return this.progressions.exploredForest.counters.forestActionCount >= 10
    }
  }, {forestActionCount: 0});

  let gotSword = new Progression("got sword", revealHuntActions, {
    haveAtLeastOneSword: function(){
      console.log(this.inventory.weapons.sword.quantity)
      return this.inventory.weapons.sword.quantity > 0
    }
  })

  //define Area Actions
  //need to refactor to let actions have a catagory to which "doAction" in game will automaticaly update counters in progressions. for now this should do. 
  let gatherFruit = new Action( "Gather Fruit",function(){
      this.inventory.food.fruit.quantity += 5;
      this.progressions.exploredForest.counters.forestActionCount += 1;
      this.eventFeed.push( new Event( "You gather fruit" ) );
    }, 2000);

  let hunt = new Action("Hunt",function(){
    this.inventory.food.meat.quantity += 3;
    this.progressions.exploredForest.counters.forestActionCount += 1;
    this.eventFeed.push( new Event( "You hunt some meat" ) );
  }, 60000);

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
  }, 5000);

  let forgeSword = new Action("Forge weapon",function(){
    this.inventory.weapons.sword.quantity += 1;
    this.eventFeed.push(new Event("You forge a metal stick, Waaay"));
  }, 30000);
  
  let learnHunting = new Action("Learn to Hunt Better", function(){
    this.areas.forest.actions.hunt = new Action("Hunt better", function(){
      this.inventory.food.meat.quantity += 10
    }, 30000)
  }, 600000)


  //set Action availability
  forgeSword.available = true;
  eatFood.available = true;
  gatherFruit.available = true;

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
      learnHunting: learnHunting
    })
  };


  areas.hQ.available = true;
  areas.forest.available = true;
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
    fiftyFruit: haveAtLeastFiftyFruit,
    exploredForest: exploredForest,
    gotSword: gotSword
  }

  return {
    areas: areas,
    eventFeed: events,
    inventory: inventoryItems,
    progressions: progressions
  }
}