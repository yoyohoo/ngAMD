'use strict'
define(['app', 'services/testService'], function(app) {
	app.controller('testingController', ['$scope', 'testData', function($scope, testData) {
		$scope.firstCities = testData.firstCities();
	}])
})
