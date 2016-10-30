const React = require('react');

const Controls = require("./Controls")
const Inventory = require("./Inventory")
const EventTicker = require("./EventTicker")

class GameView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      game: props.gameObject, 
      focusArea: props.gameObject.areas["hQ"]
    };
  }
  handleActionButtonClick(action){
    console.log("handle Action click", action)
  }
  handleAreaChange(area){
    this.setState({focusArea: area})
  }
  render() {
    let game = this.state.game;

    return (
      <div id="GameView">
        <Controls game={this.state.game} focusArea={this.state.focusArea} handleActionButtonClick={this.handleActionButtonClick} handleAreaChange={handleAreaChange}/>
        <Inventory inventory={this.state.game.inventory}/>
        <EventTicker feed={this.state.game.eventFeed}/>
      </div>)
  }

}

module.exports = GameView;