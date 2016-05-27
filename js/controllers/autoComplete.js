'use strict'
define(['app', 'directives/autoCompleteDrt', 'services/dataService'], function(app) {
	app.controller('autoCompleteController', ['$scope', 'getJsonp', function($scope, getJsonp) {
		$scope.primaryCities = ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'];
		setTimeout(function() {
			console.info('push: ', 'xiamen');
			$scope.primaryCities.push('xiamen')
		}, 5000);
		$el("#primaryCities").kendoAutoComplete({
			dataSource: $scope.primaryCities
		});
		getJsonp('http://demos.telerik.com/kendo-ui/service/products?callback=angular.callbacks.autoCompleteCallback');
	}])
})
