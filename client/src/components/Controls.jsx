const React = require('react');

const ActionButton = require('./stateless-components/ActionButton')
const AreaButton = require('./stateless-components/AreaButton')

class Controls extends React.Component {
  constructor(props){
    super(props);
    // console.log(props)
  }
  render(){

    let availableAreas = []
    for (let area in this.props.game.areas){
      availableAreas.push(
        <AreaButton key={area} area={this.props.game.areas[area]} handleAreaChange={this.props.handleAreaChange}/>
        )
    }
    let actions = []
    for(let action of this.props.focusArea.actions){
      actions.push(<ActionButton key={action.label} action={action} handleActionButtonClick={this.props.handleActionButtonClick}/>)
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