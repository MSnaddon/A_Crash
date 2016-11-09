const Area = require("../../models/Area");
const Action = require("../../models/Action");
const Event = require("../../models/Event")


let test = new Action("woo", function(){
  console.log(this.eventFeed)
      this.eventFeed.push(new Event("action has been clicked"));
    }, 2000)
test.available = true;













const cryoLab = new Area("Cyro-Lab",{
    test: test
  })


module.exports = cryoLab;