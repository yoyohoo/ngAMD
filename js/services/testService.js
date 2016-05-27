'use strict';
define(['app'], function(app) {
	app.service('testData', function() {
		return {
			'firstCities': function() {
				return [{
					id: 1,
					name: 'Beijing'
				}, {
					id: 1,
					name: 'Shanghai'
				}, {
					id: 1,
					name: 'Guangzhou'
				}, {
					id: 1,
					name: 'Shenzhen'
				}];
			}
		}
	});
});
