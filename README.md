lethexa-scheduler
-----------------

A message-scheduling-library for scheduling timed events.

Installation
------------

	npm install
	grunt


Usage
-----
	var sched = require('lethexa-scheduler');

	var scheduler = sched.createScheduler();
	var dt;

	scheduler.schedule(2.0, {}, function(param) {
		...
	});

	scheduler.schedule(1.0, {}, function(param) {
		...
	});

        dt = scheduler.timeTillNext();
	// ... wait dt-seconds ....
	scheduler.tickNext();

        dt = scheduler.timeTillNext();
	// ... wait dt-seconds ....
	scheduler.tickNext();

License
-------

This library is published under MIT license.

