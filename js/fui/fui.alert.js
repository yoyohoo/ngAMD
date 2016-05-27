define(['fui/fui.core'], function() {
	'use strict';
	var bottomAlert = function(type, msg, title) {
		var alterClose = '<span class="alert-close" onclick="removeParentEl(this);">×</span></div>',
			alert = '<div class="alert-sm alert-' + type + ' animated fadeInUp"><strong>' +
			(title || '') + '</strong>' + msg + alterClose;
		if (!FUI('.alert-stack').length) {
			FUI('footer').append('<div class="alert-stack"></div>');
		} else {
			var alerts = FUI('.alert-stack .alert-sm');
			alerts.length > 2 && alerts.remove(0);
		}
		FUI('.alert-stack').append(alert);
		setTimeout(function() {
			FUI('.alert-stack .fadeInUp').removeClass('fadeInUp')
		}, 500);
		setTimeout(function() {
			$el('.alert-stack div:first').remove();
		}, 5000);
	}
	return FUI.extend({
		tip: function(msg, title) {
			bottomAlert.call(this, 'suc', msg, title);
		},
		error: function(msg, title) {
			bottomAlert.call(this, 'err', msg, title);
		}
	})
})
