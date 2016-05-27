define(['app'], function(app) {
	app.factory('csum', function() {
			return {
				Sum: function(a, b) {
					return a + b;
				},
				Minus: function(a, b) {
					return a - b;
				}
			};
		})
		.service('cmuti', function() {
			return {
				Muti: function(a, b) {
					return a * b;
				},
				Plus: function(a, b) {
					return a / b;
				}
			};
		})
})
