define(['app'], function(app) {
	app.filter('isNum', function() {
		return function(input) {
			var array = [];
			if (input && input.length > 0)
				for (var i = 0; i < input.length; i++) {
					!isNaN(input[i]) && array.push(input[i]);
				}
			return array;
		}
	})
})
