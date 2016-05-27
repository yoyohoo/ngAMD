'use strict'
define(['app'], function(app) {
	app.directive('cityCombo', function() {
		return {
			restrict: 'E',
			scope: {
				type: '=name'
			},
			link: function($scope, $els) { //3rd load
				$scope.cities.push('xiamen');
				setTimeout.call(this, function() {
					$els.find('select[name=cityCombo]').kendoComboBox();
				});
			},
			controller: function($scope) { //2nd load
				$scope.cities = ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'];
			},
			template: '<select name="cityCombo" placeholder="Select city..."><option ng-repeat="city in cities">{{city}}</option></select>'
		}
	})
})
