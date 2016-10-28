const React = require('react');

const Controls = require("./Controls")
const Inventory = require("./Inventory")
const EventTicker = require("./EventTicker")

class GameView extends React.Component{
  render() {
    return (
      <div id="GameView">
        <Controls/>
        <Inventory/>
        <EventTicker/>
      </div>)
  }

}

module.exports = GameView;