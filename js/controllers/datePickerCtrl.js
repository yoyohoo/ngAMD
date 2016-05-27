'use strict'
define(['app', 'directives/datePickerDrt'], function(app) {
	app.controller('datePickerController', ['$scope', function($scope) {
		$el('#formatCombo').kendoComboBox();
		$el('#formatCombo').on('change', function() {
			setDpFormat(this.value);
		});
		var setDpFormat = function(value) {
			$el('#datepicker').kendoDatePicker({
				format: value
			});
			$el('#datepicker').closest('span.k-datepicker').css('width', '250px');
		}
		setDpFormat();
		$el('#monthpicker').kendoDatePicker({
			start: "year",
			depth: "year",
			format: 'yyyy:MMMM'
		});
	}])
})
