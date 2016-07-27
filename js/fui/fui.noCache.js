define(['fui/fui.core'], function() {
	'use strict';
	return function() {
		var args = arguments;
		this.appendScript = function() {
			var s = document.createElement('script');
			s.type = "text/javascript";
			s.src = args[0] + '.js?v=' + Math.random();
			document.head.appendChild(s);
		};
		this.appendScript.call(this, setTimeout);
	}
})
