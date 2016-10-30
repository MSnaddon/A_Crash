const React = require('react');

const AreaButton = ({area, handleAreaChange})=>{
  // console.log(area)

  let onClick = ()=>{
    handleAreaChange(area);
  }
  return (
    <div className="area-change-button button" onClick={onClick}>{area.name}</div>
    )
}

module.exports = AreaButton;
