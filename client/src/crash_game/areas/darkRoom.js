const Area = require("../../models/Area");
const Action = require("../../models/Action");


let turnBioLightOn = new Action("Light Orb", function(){
    this.eventFeed.push(new Event("Lit fills the room, illuminating the surroundings"))
  }, 5000);

turnBioLightOn.available = true;



const darkRoom = new Area("A dark room",{
    turnBioLightOn: turnBioLightOn
  })

darkRoom.available = true

module.exports = darkRoom;