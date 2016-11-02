const React = require('react');
// You can specify required props with CLASSNAME.propType = {key: React.PropTypes.<TYPE>.Required}
//Look into this more.. could be useful.
const ActionButton = (props)=>{
  let style;
  if(props.cooldown){
    style = {
      opacity: 0.5,
      background: "black"
    }
  }
  // console.log(style)
  let onClick = ()=>{
    props.handleActionButtonClick(props.action)
  }

  return (
      <div className="action-button button" style={style} onClick={onClick}>{props.action.label}</div>
    )
}

module.exports = ActionButton;