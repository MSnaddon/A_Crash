const React = require('react');

class Inventory extends React.Component {
  render(){
    let catagories = []

    for (let catagory in this.props.inventory){
      const catagoryObject = this.props.inventory[catagory]
      console.log(catagoryObject);
      let items = []
      for (let item in catagoryObject){
        let itemObject = catagoryObject[item]

        items.push(<div key={itemObject.name}>{itemObject.name} : {itemObject.quantity}</div>)
      }

      catagories.push(<div key={catagory} className="inventory-catagory">{items}</div>)
    }

    return (
      <div id="inventory">
        {catagories}
      </div>
      )
  }
}
module.exports = Inventory;