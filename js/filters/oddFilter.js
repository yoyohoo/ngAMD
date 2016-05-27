define(['app'], function(app) {
	app.filter('oddItems', function() {
		return function(input) {
			var array = [];
			if (input && input.length > 0)
				for (var i = 0; i < input.length; i++) {
					!(i % 2) && array.push(input[i]);
				}
			return array;
		}
	})
})
