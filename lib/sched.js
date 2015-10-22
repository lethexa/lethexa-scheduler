/* global exports */

(function(exports) {
  'use strict';

  var Event = function(relTime, param, callback) {
    var self = this;    

    this.getRelTime = function() {
      return relTime;
    };

    this.execute = function() {
      callback(param, self);
    };
  };

  /**
   * Creates an Event
   * @method createEvent
   * @param relTime {Number} Relative time to now
   * @param param {Object} The event parameters
   * @param callback {function} The callback-function 
   */
  exports.createEvent = function(relTime, param, callback) {
    return new Event(relTime, param, callback);
  };


  var Scheduler = function() {

    this.schedule = function(e) {
      var relTime = e.getRelTime();
      
      return relTime;
    };
  };


  exports.createScheduler = function() {
    return new Scheduler();
  };

})(typeof exports === 'undefined'? this.sched={}: exports);


