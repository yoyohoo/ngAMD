define(['app'], function(app) {
	app.directive('datePicker', function() {
		return {
			restrict: 'ACE',
			link: function($scope, $els) {
				setTimeout.call(this, function() {
					$els.find('input').kendoDatePicker({
						format: 'yyyy/MM/dd'
					});
				});
			},
			template: '<input value="2016/04/27" />'
		}
	})
})
