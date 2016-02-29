var sched = require('./lib/sched');


var SimExec = function() {
  var scheduler = sched.createScheduler();
  var timeNow = 0.0;

  this.timeAdvanceRequest = function(model, dt) {
    scheduler.schedule(dt, model, function(modelToGrant) {
      modelToGrant.timeAdvanceGrant(scheduler.getAbsTime());
    });  
  };

  this.tick = function() {
    var dt = scheduler.timeTillNext();
    scheduler.tickNext();
  };
};



var Model = function(simexec, name, dt) {
  var self = this;
  simexec.timeAdvanceRequest(self, dt);

  this.timeAdvanceGrant = function(time) {
    console.log('granted to', name, time);
    simexec.timeAdvanceRequest(self, dt);
  }
};


var simExec = new SimExec();
var model1 = new Model(simExec, 'Model1', 1.0);
var model2 = new Model(simExec, 'Model2', 2.0)

for(var i=0;i<10;i++) {
  simExec.tick();
}

