'use strict'
define(['app'], function(app) {
	app.controller('selectController', ['$scope', '$document', function($scope, $document) {
		$document.title = 'Selects';
		$scope.primaryCities = ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'];
		$scope.AddNewCity = function() {
			var a = $scope.primaryCities,
				c = $scope.newCity;
			c && !a.Contains(c) && a.push(c) && alert('OK!');
		}
	}])
})
