'use strict'
define(['app'], function(app) {
	app.controller('functionController', ['$scope', function($scope) {
		// click test: onclick>click=on(click)>ng-click
		var a = $('a#click-test'),
			r = $('#click-result'),
			logTime = function(n) {
				r.append('<p>' + n + ' @' + new Date().getMilliseconds() + '</p>');
			};
		a.click(function() {
			logTime('click');
		})
		a.on('click', function() {
			logTime('on(click,fn)');
		})
		$scope.ngClickTest = function() {
			logTime('ng-click');
		}
		window.onClickTest = function() {
			logTime('onclick');
		}
	}])
})
