'use strict'
define(['app', 'directives/comboBoxDrt'], function(app) {
	app.controller('comboBoxController', ['$scope', '$location', function($scope, $location) {
		console.info('first load: ',$location.absUrl()); //1st load
	}])
})
