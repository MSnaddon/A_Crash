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

    this.handleActionButtonClick = this.handleActionButtonClick.bind(this);
    this.handleAreaChange = this.handleAreaChange.bind(this)
  }

  handleActionButtonClick(action){
    console.log("handle Action click", action)
  }

  handleAreaChange(area){
    console.log("this is ",this)
    this.setState({focusArea: area})
  }

  render() {
    let game = this.state.game;

    return (
      <div id="game-view">
        <Controls game={this.state.game} focusArea={this.state.focusArea} handleActionButtonClick={this.handleActionButtonClick} handleAreaChange={this.handleAreaChange}/>
        <Inventory inventory={this.state.game.inventory}/>
        <EventTicker feed={this.state.game.eventFeed}/>
      </div>)
  }

}

module.exports = GameView;