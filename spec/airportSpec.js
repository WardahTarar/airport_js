'use strict'

describe('Airport', function(){
  let airport
  let plane
  let weather 

  beforeEach(function() {
    airport = new Airport(weather)
    plane = jasmine.createSpyObj('plane',['land'])
    weather = jasmine.createSpyObj('weather',['isStormy'])
  })

  it('checks that airport is empty by default', function() {
    expect(airport.planes()).toEqual([])
  })

  describe('under normal condition', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false)
    })

    it('makes airport clear for planes to land', function(){
      airport.clearForLanding(plane)
      expect(airport.planes()).toEqual([plane])
    })

    it('clears planes after take off', function(){
      airport.clearForLanding(plane)
      airport.clearForTakeOff(plane)
      expect(airport.planes()).toEqual([])
    })
  })

  describe('under stormy condition', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true)
    })

    it('prevents plane from takeoff', function(){
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm')
    })

    it('prevents plane from landing', function(){
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm')
    })
  })
})