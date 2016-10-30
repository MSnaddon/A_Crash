const React = require('react');
// You can specify required props with CLASSNAME.propType = {key: React.PropTypes.<TYPE>.Required}
//Look into this more.. could be useful.

// also use the ES6 destructuring on your props. saves typing "this.props.<prop>" or "props.<prop>".
//eg const Button = ({onClick, infoData})=>{}
// again, look this up

const ClickButton = ({onClick, buttonLabel, className })=>{

  return (
    <div className={className} onClick={onClick}>{buttonLabel}</div>
    )
}

module.exports = ClickButton;
