const React = require('react');

const Controls = require("./Controls")
const Inventory = require("./Inventory")
const EventTicker = require("./EventTicker")

class GameView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      game: props.gameObject, 
      focusArea: props.gameObject.areas[0]
    };
  }
  handleActionButtonClick(action){
    console.log("handle Action click", action)
  }
  handleAreaChange(areaKey)
  render() {
    let game = this.state.game;

    return (
      <div id="GameView">
        <Controls game={this.state.game} focusArea={this.state.focusArea} handleActionButtonClick={this.handleButtonClick}/>
        <Inventory inventory={this.state.game.inventory}/>
        <EventTicker feed={this.state.game.eventFeed}/>
      </div>)
  }

}

module.exports = GameView;