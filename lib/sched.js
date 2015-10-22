/* global exports */

(function(exports) {
  'use strict';

  var Scheduler = function() {
  };


  exports.createScheduler = function() {
    return new Scheduler();
  };

})(typeof exports === 'undefined'? this.sched={}: exports);


