'use strict'

describe('Airport', function(){
  let airport
  let plane
  beforeEach(function() {
    airport = new Airport()
    plane = jasmine.createSpyObj('plane',['land'])
  })
  it('checks that airport is empty by default', function() {
    expect(airport.planes()).toEqual([])
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

  it('can check for stormy condition', function(){
    expect(airport.isStormy()).toBeFalsy()
  })

  describe('under stormy condition', function(){
    it('prevents plane from takeoff', function(){
      spyOn(airport,'isStormy').and.returnValue(true)
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm')
    })

    it('prevents plane from landing', function(){
      spyOn(airport,'isStormy').and.returnValue(true)
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm')
    })
  })
})