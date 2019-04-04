'use strict'

describe('Plane',function(){
  let plane;
  let airport;
  beforeEach(function(){
    plane = new Plane()
    airport = jasmine.createSpyObj('airport',['clearForLanding'])
  })

  it('can land plane at airport', function(){
    plane.land(airport)
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane)
  })
})
