class Progression{
  constructor(description, thresholdObject, advanceAction){
    this.description = description
    this.thresholdObject = thresholdObject
    this.advanceAction = advanceAction
  }
  //alternative in checker is to pass the game, breaks Solid... not sure what this way breaks but it breaks something. Invoking a method that passes itself has got to break some rules. potential stack overflow?
  isPastThreshold(progression){
    //this = the game
    for(let check in progression.thresholdObject){
      if (!progression.thresholdObject[check].bind(this)()) {return false};
    }
    return true
  }
}

module.exports = Progression;
