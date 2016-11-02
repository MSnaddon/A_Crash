const React = require('react');
// You can specify required props with CLASSNAME.propType = {key: React.PropTypes.<TYPE>.Required}
//Look into this more.. could be useful.
const ActionButton = (props)=>{
  let style;
  if(props.cooldown){
    let animationDuration = ((props.action.cooldown)/1000) + "s"
    // console.log(animationDuration)
    style = {
      animation: "fade " + animationDuration + " ease-out",
    }
  }
  console.log(style)
  // console.log(style)
  let onClick = ()=>{
    props.handleActionButtonClick(props.action)
  }

  return (
      <div className="action-button button" style={style} onClick={onClick}>{props.action.label}</div>
    )
}

module.exports = ActionButton;