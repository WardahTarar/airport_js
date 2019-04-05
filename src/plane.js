'use strict'

function Plane() {}

Plane.prototype.land = function(airport) {
  airport.clearForLanding(this)
  this._location = airport
}

Plane.prototype.takeoff = function() {
  this._location.clearForTakeOff()
}
