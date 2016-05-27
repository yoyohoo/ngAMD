'use strict'
define(['app', 'common/alertPlg', 'fui/fui.alert', 'fui/fui.drag'], function(app) {
	app.controller('pluginController', function($scope) {
		$scope.showBigAlert = function() {
			$el('.big-alert')
				.alert(new Date().getSeconds() + '-$.fn.alert', 'alertPlg 1:');
		}
		$scope.showBottomAlert = function() {
			// $.alert(new Date().getSeconds() + '-$.alert', ' alertPlg 2:');
			FUI.error(new Date().getSeconds(), 'FUI:');
		}
	})
})
