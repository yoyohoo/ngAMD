'use strict'
define(['app'], function(app) {
	app.controller('alertController', ['$scope', function($scope,$timeout) {
		var alterClose = ' <span class="alert-close" onclick="$(this.parentNode).remove();">×</span></div>';
		$scope.showContentAlert = function(msg, title) { // title is optinal, depends on .show-alert
			var alert = '<div class="alert-lg alert-suc animated fadeInUp"><strong>' +
				title + '</strong> ' + msg + alterClose;
			$el(alert).appendTo($el('.show-alert'));
		}
		$scope.showBottomAlert = function(msg, title) { // title is optinal, depends on .alert-stack
			if ($el('.alert-stack div').length > 2) {
				$el('.alert-stack div:first').remove();
			}
			$el('.alert-stack').append('<div class="alert-sm alert-suc animated fadeInUp"><strong>' +
				title + '</strong> @' + msg + alterClose);
			$timeout(function() {
				$el('.alert-stack div:first').remove();
			}, 5000);
		}
		$el('a.btn:first').on('click', function() {
			$scope.showContentAlert('This is a new alert', 'OK!');
		})
		$el('a.btn:last').on('click', function() {
			$scope.showBottomAlert(new Date().toString().substr(16, 8), 'Complete!');
		})
	}])

	// return ['$scope', '$timeout', function($scope, $timeout) {
	// 	var alterClose = ' <span class="alert-close" onclick="$(this.parentNode).remove();">×</span></div>';
	// 	$scope.showContentAlert = function(msg, title) { // title is optinal, depends on .show-alert
	// 		var alert = '<div class="alert-lg alert-suc animated fadeInUp"><strong>' +
	// 			title + '</strong> ' + msg + alterClose;
	// 		$el(alert).appendTo($el('.show-alert'));
	// 	}
	// 	$scope.showBottomAlert = function(msg, title) { // title is optinal, depends on .alert-stack
	// 		if ($el('.alert-stack div').length > 2) {
	// 			$el('.alert-stack div:first').remove();
	// 		}
	// 		$el('.alert-stack').append('<div class="alert-sm alert-suc animated fadeInUp"><strong>' +
	// 			title + '</strong> @' + msg + alterClose);
	// 		$timeout(function() {
	// 			$el('.alert-stack div:first').remove();
	// 		}, 5000);
	// 	}
	// 	$el('a.btn:first').on('click', function() {
	// 		$scope.showContentAlert('This is a new alert', 'OK!');
	// 	})
	// 	$el('a.btn:last').on('click', function() {
	// 		$scope.showBottomAlert(new Date().toString().substr(16, 8), 'Complete!');
	// 	})
	// }];
})
