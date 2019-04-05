'use strict'

describe('Weather',function(){
  let weather
  beforeEach(function(){
    weather = new Weather()
  })  

  it('gives stormy weather sometimes', function(){
    spyOn(Math,'random').and.returnValue(1)
    expect(weather.isStormy()).toBeTruthy()
  })
})


