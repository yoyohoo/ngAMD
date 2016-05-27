'use strict'
define(['app', 'angular-css-injector', 'filters/oddFilter', 'filters/isNum'], function(app) {
	app.controller('cssController', ['$scope', 'cssInjector', function($scope, cssInjector) {
		cssInjector.removeAll();
		cssInjector.add('/styles/citi.css');

		$('.toggle-txt textarea').on('click', function(e) {
			e.stopPropagation();
		})
		$('.toggle-txt').on('click', function(e) {
			$(this).find('textarea').toggle(100);
		})

		//test filter
		$scope.items = [1, 'hello', 'well', 2, 3, 4, 5];
		$scope.currentFilter = 'all';
		$scope.setFilter = function(filter) {
			$scope.currentFilter = filter;
			var cls = 'button-active',
				btns = $el('#tgl-filter a'),
				actBtn = $el('#tgl-filter a.' + cls);
			actBtn.removeClass(cls);
			ng.forEach(btns, function(item) {
				if (item.innerText.toLowerCase() == filter.toLowerCase()) {
					$el(item).addClass(cls);
				}
			})
		}
	}])
})
