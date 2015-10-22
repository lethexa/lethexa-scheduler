/* global exports */

/**
 * sched
 * @class sched
 */
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
    var absTime = 0.0;
    var eventQueue = [];
    var self = this;

    this.getAbsTime = function() {
      return absTime;
    };

    var eventCompare = function(a, b) {
      return a.absTime - b.absTime;
    };

    this.schedule = function(relTime, param, callback) {
      eventQueue.push({
        absTime: absTime + relTime,
        param: param,
        callback: callback 
      });     
      eventQueue.sort(eventCompare);
      return relTime;
    };

    this.tickNext = function() {
      if(eventQueue.length === 0)
        throw new Error('Nothing to tick !');
      var e = eventQueue[0];
      eventQueue.slice(1); // remove first
      absTime = e.absTime;
      if(e.callback)
        e.callback(e.param, absTime, self);
    };
  };


  exports.createScheduler = function() {
    return new Scheduler();
  };

})(typeof exports === 'undefined'? this.sched={}: exports);


