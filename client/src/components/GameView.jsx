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
  componentWillMount(){
    //for testing
    setInterval(()=>{
      this.state.game.supplyTick()
      this.forceUpdate()
    }, 50000)

  }

  handleActionButtonClick(action){
    // console.log(action)
    this.state.game.doAction(action);
    this.forceUpdate()
  }

  handleAreaChange(area){
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