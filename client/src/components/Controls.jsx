const React = require('react');

const ClickButton = require('./stateless-components/ClickButton')

class Controls extends React.Component {
  constructor(props){
    super(props);
    console.log(props)
  }
  render(){

    let availableAreas = []
    for (let area in props.game.areas){
      availableAreas.push(area)
    }
    console.log(availableAreas)

    return (
      <div id="controls">
        <h3>I am Controls</h3>
        <ClickButton onClick={()=>{console.log("ButtonClicked")}} buttonLabel="testing"/>
      </div>
      )
  }
}

module.exports = Controls;