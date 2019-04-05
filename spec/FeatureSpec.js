'use strict'

describe('Feature test', function() {

  let airport
  let plane

  beforeEach(function() {
    airport = new Airport()
    plane = new Plane()
  })

  describe('under normal conditions', function(){
    beforeEach(function(){
      spyOn(Math,'random').and.returnValue(0);
    });

    it('lands the plane on the airport', function(){
      plane.land(airport)
      expect(airport.planes()).toContain(plane)
    })

    it('plane take off from the airport', function(){
      plane.land(airport)
      plane.takeoff()
      expect(airport.planes()).not.toContain(plane)
    })
})

  describe('under stormy conditions', function(){
    it('prevents takeoff when weather is stormy', function(){
      spyOn(Math,'random').and.returnValue(0)
      plane.land(airport)
      spyOn(airport._weather,'isStormy').and.returnValue(true)
      expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm')
      expect(airport.planes()).toContain(plane)
    })
  
    it('prevents landing in stormy weather', function() {
      spyOn(airport._weather,'isStormy').and.returnValue(true)
      expect(function(){ plane.land(airport);}).toThrowError('cannot land during storm')
      expect(airport.planes()).toEqual([])
    })
  })
})
