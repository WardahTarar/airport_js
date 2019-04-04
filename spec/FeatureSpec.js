'use strict'

describe('Feature test', function() {

  let airport
  let plane

  beforeEach(function() {
    airport = new Airport()
    plane = new Plane()
  })

  it('lands the plane on the airport', function(){
    plane.land(airport)
    expect(airport.planes()).toContain(plane)
  })

})