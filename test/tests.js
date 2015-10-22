var assert = require("assert");
var sched = require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../lib/') + 'sched');

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(5));
            assert.equal(-1, [1, 2, 3].indexOf(0));
        });
    });
});

describe('sched', function () {
    describe('#createScheduler()', function () {
        it('should return a valid scheduler-object', function () {

            assert.notEqual(undefined, sched.createScheduler());
        });
    });


    describe('#createEvent()', function () {
        it('should return a valid event-object', function () {

            assert.notEqual(undefined, sched.createEvent());
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

});



