/* global exports */

(function(exports) {
  'use strict';

  /**
   * The scheduler-implementation
   * @class Scheduler
   */
  var Scheduler = function() {
    var absTime = 0.0;
    var eventQueue = [];
    var self = this;

    /**
     * Returns the absolute time of the scheduler
     * @method getAbsTime
     * @return {Number} The absolute time of the scheduler
     */
    this.getAbsTime = function() {
      return absTime;
    };

    var eventCompare = function(a, b) {
      return a.absTime - b.absTime;
    };

    /**
     * Inserts an event into the eventqueue
     * @method schedule
     * @param relTime {Number} The relative time from now on to execute the event.
     * @param param {Object} The parameters for the event
     * @param callback {function} The function to call. 
     */
    this.schedule = function(relTime, param, callback) {
      eventQueue.push({
        absTime: absTime + relTime,
        param: param,
        callback: callback 
      });     
      eventQueue.sort(eventCompare);
      return relTime;
    };

    /**
     * Checks if eventqueue has next event or is empty.
     * @method hasNext
     * @return {Boolean} True, if eventqueue not empty else false
     */
    this.hasNext = function() {
      return eventQueue.length !== 0;
    };

    /**
     * Returns the time to the next event.
     * This function throws an error if eventqueue is empty.
     * @method timeTillNext
     * @return {Number} The time to the next event
     */
    this.timeTillNext = function() {
      if(eventQueue.length === 0)
        throw new Error('No next event !');
      var e = eventQueue[0];
      return e.absTime - absTime;
    };

    /**
     * Executes the next event in the queue
     * This function throws an error if the queue is empty
     * @method tickNext
     */
    this.tickNext = function() {
      if(eventQueue.length === 0)
        throw new Error('Nothing to tick !');
      var e = eventQueue[0];
      var dt = e.absTime - absTime;
      eventQueue = eventQueue.slice(1); // remove first
      absTime = e.absTime;
      if(e.callback)
        e.callback(e.param, absTime, self);
      return dt;
    };
  };


  exports.createScheduler = function() {
    return new Scheduler();
  };

})(typeof exports === 'undefined'? this.sched={}: exports);


