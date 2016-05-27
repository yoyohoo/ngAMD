define(['app'], function(app) {
	app.directive('simpleAutoComplete', function() {
			return {
				restrict: 'E',
				link: function($scope, $els) {
					$els.find('input').kendoAutoComplete({
						dataSource: $scope.primaryCities
					});
				},
				template: '<input />'
			}
		})
		.directive('customAutocomplete', function() {
			return {
				restrict: 'E',
				link: function($scope, $els) {
					angular.callbacks.autoCompleteCallback = function(response) {
						$scope.customProducts = response;
						$els.find('input').kendoAutoComplete({
							dataTextField: 'ProductName',
							dataSource: $scope.customProducts,
							filter: "startswith",
							placeholder: "Select product...",
							animation: {
								open: {
									effects: "fade:in",
									duration: 500
								}
							}
						});
					}
				},
				template: '<input style="width:100%"/>'
			}
		})
})
