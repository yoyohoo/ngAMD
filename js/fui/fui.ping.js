define(['fui/fui.core'], function() {
	'use strict';
	FUI.Ping = FUI.Ping || new Function();
	FUI.Ping.prototype.ping = function(source, callback) {
		try {
			new URL(source);
		} catch (ex) {
			console.log(ex);
			if (source.indexOf('http') < 0) source = 'http://' + source;
		}
		this.img = new Image();
		var startTime = new Date().getTime(),
			startPing = function() {
				var timeDiff = new Date().getTime() - startTime;
				(typeof callback === 'function') && callback(timeDiff);
			}
		this.img.onload = this.img.onerror = startPing;
		this.img.src = source + '/?t=' + (new Date().getTime());
	}
})
