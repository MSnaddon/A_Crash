const Action = require('../Action')

var assert = require("assert");

describe("An action", function(){
  
  let action;
  let testObject;

  beforeEach(()=>{
    action = new Action(function(){
      console.log("action executed")
    })
  })
  
  
  it("should have a function for onTrigger", ()=>{
    assert.equal(typeof(action.trigger), "function")
  })

  it("should have a togglable availability that defaults false", ()=>{
    assert.equal(action.available, false);
    action.toggleAvailability();
    assert.equal(action.available, true);
  })


})