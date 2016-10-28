const Event = require('../Event')

var assert = require("assert");

describe("An Event", function(){
  
  let event;

  beforeEach(()=>{
    event = new Event("Did Test driven development");
  })

  it("should have description of event", ()=>{
    assert.equal(event.description, "Did Test driven development")
  })


})