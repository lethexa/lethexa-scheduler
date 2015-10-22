A message-scheduling-library

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


Contributors
------------

* lethexa


License
-------
Copyright (c) 2015 Tim Leerhoff <tleerhof@web.de>

Licensed under MIT


