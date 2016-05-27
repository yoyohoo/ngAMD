'use strict'
define(['jq'], function() {
	var alterClose = ' <span class="alert-close" onclick="$(this.parentNode).remove();">×</span></div>',
		stackSm = '<div class="alert-stack"></div>',
		stackLg = '<div class="show-alert"></div>';
	$.extend({
		alert: function(msg, title) {
			var alert = '<div class="alert-sm alert-suc animated fadeInUp"><strong>' +
				title + '</strong>' + msg + alterClose;
			if (!$('footer').find('.alert-stack').length) {
				$('footer').append(stackSm);
			} else {
				var alerts = $('footer').find('.alert-stack .alert-sm');
				alerts.length > 2 && alerts.first().remove();
			}
			return $('footer').find('.alert-stack').append(alert);
		}
	});
	$.fn.extend({
		alert: function(msg, title) {
			var alert = '<div class="alert-lg alert-suc animated fadeInUp"><strong>' +
				title + '</strong> ' + msg + alterClose;
			if (!this.find('.show-alert').length) this.append(stackLg);
			return this.find('.show-alert').append(alert);
		}
	})
})
