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

  it('plane take off from the airport', function(){
    plane.land(airport)
    plane.takeoff()
    expect(airport.planes()).not.toContain(plane)
  })

  it('it prevents takeoff when weather is stormy', function(){
    plane.land(airport)
    spyOn(airport,'isStormy').and.returnValue(true)
    expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm')
    expect(airport.planes()).toContain(plane)
  })

})