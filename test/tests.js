var assert = require("assert");
var sched = require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../lib/') + 'sched');

describe('sched', function () {
    describe('#createScheduler()', function () {
        it('should return a valid scheduler-object', function () {

            assert.notEqual(undefined, sched.createScheduler());
        });
    });

    describe('#schedule()', function () {
        it('should throw error when no further events in queue', function () {
            var scheduler = sched.createScheduler();
            assert.throws( function() {
              scheduler.tickNext();
            });
        });
    });

    describe('#schedule()', function () {
        it('should execute the callback, when schedule one event', function () {
            var scheduler = sched.createScheduler();
            var called = false;

            scheduler.schedule(1.0, {}, function(param) {
              called = true;
            });
            scheduler.tickNext();

            assert.equal(true, called);
        });
    });

    describe('#schedule()', function () {
        it('should reorder events by time', function () {
            var scheduler = sched.createScheduler();
            var eventName;

            scheduler.schedule(2.0, {}, function(param) {
              eventName = 'event2';
            });
            scheduler.schedule(1.0, {}, function(param) {
              eventName = 'event1'
            });
            scheduler.tickNext();
            assert.equal('event1', eventName);

            scheduler.tickNext();
            assert.equal('event2', eventName);
        });
    });

    describe('#timeTillNext()', function () {
        it('should return the time till next event', function () {
            var scheduler = sched.createScheduler();

            scheduler.schedule(2.0, {}, function(param) {
              eventName = 'event2';
            });
            var dt = scheduler.timeTillNext();
            assert.equal(2.0, dt);
        });
    });

    describe('#hasNext()', function () {
        it('should return true when queue not empty', function () {
            var scheduler = sched.createScheduler();

            scheduler.schedule(2.0, {}, function(param) {});
            assert.equal(true, scheduler.hasNext());
        });
    });

    describe('#hasNext()', function () {
        it('should return false when queue empty', function () {
            var scheduler = sched.createScheduler();

            assert.equal(false, scheduler.hasNext());
        });
    });

});



