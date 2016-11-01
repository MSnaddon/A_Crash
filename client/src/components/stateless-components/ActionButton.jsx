const React = require('react');
// You can specify required props with CLASSNAME.propType = {key: React.PropTypes.<TYPE>.Required}
//Look into this more.. could be useful.
const ActionButton = (props)=>{
  let className = props.cooldown ? "action-button button button-cooldown" : "action-button button"

  let onClick = ()=>{
    props.handleActionButtonClick(props.action)
  }

  return (
      <div className={className} onClick={onClick}>{props.action.label}</div>
    )
}












// const ActionButton = ({action, handleActionButtonClick})=>{

//   let onClick = ()=>{

//     handleActionButtonClick(action);
//   }
//   return (
//     <div className="action-button button" onClick={onClick}>{action.label}</div>
//     )
// }

module.exports = ActionButton;
