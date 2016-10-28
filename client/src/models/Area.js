const Action = require("./Action");

class Area {
  constructor(name, ...actions){
    this.name = name
    this.available = false
    this.actions = actions
  }
  toggleAvailability(){
    this.available = this.available === false
  }
}

module.exports = Area;