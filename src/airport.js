'use strict'

function Airport() {
  this._runway = []
}

Airport.prototype.planes = function () {
  return this._runway
}

Airport.prototype.clearForLanding = function(plane){
  this._runway.push(plane)
}

Airport.prototype.clearForTakeOff = function(plane) {
  if (this.isStormy()) {
    throw new Error('cannot takeoff during storm')
  }
  this._runway = []
}
Airport.prototype.isStormy = function(){
  return false
}