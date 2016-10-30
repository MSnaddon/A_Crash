class Action{
  constructor(label, triggerFunction){
    this.trigger = triggerFunction;
    this.available = false;
    this.label = label;
  }
  toggleAvailability(){
    this.available = this.available === false
  }
}
module.exports = Action;