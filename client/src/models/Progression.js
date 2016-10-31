class Progression{
  constructor(description, thresholdObject, advanceAction){
    this.description = description
    this.thresholdObject = thresholdObject
    this.advanceAction = advanceAction
  }
  isPastThreshold(){
    console.log(this)
  }
}

module.exports = Progression;
