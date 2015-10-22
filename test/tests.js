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
});



