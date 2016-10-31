class Progression{
  constructor(description, advanceAction, thresholdObject){
    this.description = description;
    //threshold object must contain keys which return boolean values stating true if they are complete
    this.thresholds = thresholdObject;
    this.advanceAction = advanceAction;
    this.done = false
  }
  //alternative in checker is to pass the game, breaks Solid... not sure what this way breaks but it breaks something. Invoking a method that passes itself has got to break some rules. potential stack overflow?
  isPastThreshold(progression){
    //DO NOT CALL 'progression.isPastThreshold'. NO REASON WHY, SO DON'T DO IT
    //this = the game
    for(let checkKey in progression.thresholds){
      let check = progression.thresholds[checkKey];

      // if boolean, check for false. else, invoke checker function and return false on fail
      if (typeof check === 'boolean'){
        if (!check) return false;
      } else {
        if(!check.bind(this)()) return false;
      }
      

    }
    progression.done = true
    return true
  }
}

module.exports = Progression;
