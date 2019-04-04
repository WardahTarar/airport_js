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
})