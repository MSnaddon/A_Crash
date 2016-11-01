const React = require('react');
// You can specify required props with CLASSNAME.propType = {key: React.PropTypes.<TYPE>.Required}
//Look into this more.. could be useful.


class ActionsButton extends React.Component{
  constructor(){
    
  }
  onClick(){

  }
  render(){

  }
}











const ActionButton = ({action, handleActionButtonClick})=>{

  let onClick = ()=>{

    handleActionButtonClick(action);
  }
  return (
    <div className="action-button button" onClick={onClick}>{action.label}</div>
    )
}

module.exports = ActionButton;
