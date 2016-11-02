const React = require('react');

const ActionButton = require('./stateless-components/ActionButton')
const AreaButton = require('./stateless-components/AreaButton')

class Controls extends React.Component {
  constructor(props){
    super(props);
    this.state = {cooldown: {}}
  }
  handleActionButtonClick(action){
    let key = action.key
    //if action is off cooldown
    if (!this.state.cooldown[action.key]) {
      this.props.handleActionButtonClick(action);
      let newCooldown = this.state.cooldown
      newCooldown[key] = true
      this.setState({ cooldown: newCooldown });

      setTimeout( function(){
        let newCooldown = this.state.cooldown
        newCooldown[key] = false
        this.setState({ cooldown: newCooldown })
      }.bind(this), action.cooldown)
    }
  }
  render(){
    //render a full set of actions seperateed by div with style="display:none;"

    let availableAreas = []

    for (let area in this.props.game.areas){
      availableAreas.push(
      //needs to change handle area change to conpenent to affect display of actions box
      <AreaButton key={area} area={this.props.game.areas[area]} handleAreaChange={this.props.handleAreaChange} />
      )
    }

    let actions = [] 

    for(let action in this.props.focusArea.actions){
      let actionObject = this.props.focusArea.actions[action]
      actions.push(<ActionButton key={actionObject.key} action={actionObject} handleActionButtonClick={this.handleActionButtonClick.bind(this)} cooldown={this.state.cooldown[actionObject.key]}/>)

    }
    // console.log(actions)

    return (
      <div className="game-view-child" id="controls">
        <div id="area-select">
          {availableAreas}
        </div>
        <hr></hr>
        <div id="action-select">
          {actions}
        </div>
      </div>
      )
  }
}

module.exports = Controls;