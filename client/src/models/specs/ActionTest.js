const Action = require('../Action')

var assert = require("assert");

describe("An action", function(){
  
  let action;
  let testObject;

  beforeEach(()=>{
    action = new Action(function(){
      this.testData += 1
    });

    testObject = {
      testData: 1,
      testAction: action
    }
  })

  it("should have a function for onTrigger", ()=>{
    assert.equal(typeof(action.trigger), "function")
  })


})