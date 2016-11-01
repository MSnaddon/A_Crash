const React = require('react');
// You can specify required props with CLASSNAME.propType = {key: React.PropTypes.<TYPE>.Required}
//Look into this more.. could be useful.
class ActionButton extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      cooldown: false
    }


    this.onClick = this.onClick.bind(this);
  }
  onClick(){
    if (!this.state.cooldown) {
      this.props.handleActionButtonClick(this.props.action);
      this.setState({cooldown:true})
      
      setTimeout(function(){
        this.setState({cooldown: false})
      }.bind(this), this.props.action.cooldown)
    } 
  }
  render(){
    let className = this.state.cooldown ? "action-button button button-cooldown" :"action-button button"

    return (
        <div className={className} onClick={this.onClick}>{this.props.action.label}</div>
      )
  }
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
