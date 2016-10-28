const Area = require('../Area')

var assert = require("assert");

describe("An Area", function(){
  
  let area;

  beforeEach(()=>{
    area = new Area("The barrens");
  })

  it("should have a name", ()=>{
    assert.equal(area.name, "The barrens");

  })

  it("should have a list of actions", ()=>{
    assert.equal(area.actions);
  })

  it("should have a togglable availability tha defaults false", ()=>{
    assert.equal(area.available, false);
    area.toggleAvailability();
    assert.equal(area.available, true);
  })

})