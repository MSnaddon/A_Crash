const React = require('react');

const Controls = require("./Controls")
const Inventory = require("./Inventory")
const EventTicker = require("./EventTicker")

class GameView extends React.Component{
  constructor(props){
    super(props);
    this.state = {game: props.gameObject};
    this.state.focusArea = props.gameObject.focusArea
  }
  render() {
    let game = this.state.game;
    return (
      <div id="GameView">
        <Controls areas={game.areas} focusArea={this.state.focusArea}/>
        <Inventory inventory={this.state.game.inventory}/>
        <EventTicker feed={this.state.game.eventFeed}/>
      </div>)
  }

}

module.exports = GameView;