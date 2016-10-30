const React = require('react');

const ClickButton = require('./stateless-components/ClickButton')

class Controls extends React.Component {
  constructor(props){
    super(props);
    console.log(props)
  }
  render(){

    let availableAreas = []
    for (let area in this.props.game.areas){
      availableAreas.push(
        <ClickButton onClick={this.props.handleAreaChange} 
        buttonLabel= {this.props.game.areas[area].name}
        class="area-select-button"
         />

        )
    }
    console.log(availableAreas)

    return (
      <div id="controls">
        <h3>I am Controls</h3>
        <ClickButton  onClick={()=>{console.log("ButtonClicked")}} buttonLabel="testing" className="testing"/>
      </div>
      )
  }
}

module.exports = Controls;