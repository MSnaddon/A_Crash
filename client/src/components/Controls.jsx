const React = require('react');

const ClickButton = require('./stateless-components/ClickButton')

class Controls extends React.Component {
  constructor(props){
    super(props);
    this.state = {focusArea}
  }
  render(){
    return (
      <div id="controls">
        <h3>I am Controls</h3>
        <ClickButton onClick={()=>{console.log("ButtonClicked")}} buttonLabel="testing"/>
      </div>
      )
  }
}

module.exports = Controls;