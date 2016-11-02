const React = require('react');

class Inventory extends React.Component {
  render(){
    let catagories = []

    for (let catagory in this.props.inventory){
      const catagoryObject = this.props.inventory[catagory]
      const items = []
      for (let item in catagoryObject){

        const itemObject = catagoryObject[item]
        items.push(<div key={itemObject.name}>{itemObject.name} - {itemObject.quantity}</div>)

      }
      let header = catagory.replace(/\b\w/, (letter)=>{ return letter.toUpperCase() })
      catagories.push(<div key={catagory}>{header}<div className="inventory-catagory">{items}</div></div>)

    }

    return (
      <div className="game-view-child" id="inventory">
        <h4>Inventory</h4>
        {catagories}
      </div>
      )
  }
}
module.exports = Inventory;