class Action{
  constructor(label, triggerFunction, cooldown){
    this.trigger = triggerFunction;
    this.available = false;
    this.label = label;
    this.cooldown = cooldown;
    this.key = this.assignKey()
  }
  toggleAvailability(){
    this.available = this.available === false;
  }
  assignKey(){
    this.constructor.keyAssign ++
    return this.constructor.keyAssign
  }
}

Action.keyAssign = 1000;


module.exports = Action;