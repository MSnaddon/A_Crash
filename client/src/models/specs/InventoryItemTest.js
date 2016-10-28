const InventoryItem = require('../InventoryItem')

var assert = require("assert");

describe("An InventoryItem", function(){
  
  let item;

  beforeEach(()=>{
    item = new InventoryItem("food", 4);
  })


  it("should have a name", ()=>{
    assert.equal(item.name, "food");
  })

  it("should have a starding quantity", ()=>{
    asser.equal(item.quantity, 4)
  })

})