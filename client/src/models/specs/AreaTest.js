const Area = require('../Area')
const Action = require('../Action')

var assert = require("assert");

describe("An Area", function(){
  
  let area;
  let action;

  beforeEach(()=>{
    action1 = new Action(function(){
      console.log("action 1 executed")
    })
    action2 = new Action(function(){
      console.log("action 2 executed")
    })
    
    area = new Area("The barrens", action1, action2);
    
  })

  it("should have a name", ()=>{
    assert.equal(area.name, "The barrens");

  })

  it("should have a list of actions", ()=>{
    assert.deepEqual(area.actions, [action1, action2]);
  })

  it("should have a togglable availability that defaults false", ()=>{
    assert.equal(area.available, false);
    area.toggleAvailability();
    assert.equal(area.available, true);
  })

})