class Action{
  constructor(triggerFunction){
    this.trigger = triggerFunction;
    this.available = false
  }
  toggleAvailability(){
    this.available = this.available === false
  }
}
module.exports = Action;