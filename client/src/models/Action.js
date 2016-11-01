class Action{
  constructor(label, triggerFunction, cooldown){
    this.trigger = triggerFunction;
    this.available = false;
    this.label = label;
    this.cooldown = cooldown;
  }
  toggleAvailability(){
    this.available = this.available === false
  }
}
module.exports = Action;