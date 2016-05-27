(function() {
	'use strict'

	/* 
	 * variable
	 */
	var version = '@VERSION',
		operates = {
			'click': function(callback) {
				FUI.each(this, function(item) {
					callback && (item.onclick = callback);
				})
			},
			'append': function(el) {
				FUI.each(this, function(item) {
					item.innerHTML += el;
				})
			},
			'remove': function() {
				var b = arguments.length,
					i = arguments[0],
					r = function(el) {
						el && el.parentNode &&
							el.parentNode.removeChild(el);
					}
				FUI.each(this, function(el, index) {
					!b && r(el);
					if (b && i === index) {
						r(el);
						return true;
					}
				})
			},
			'addClass': function(name) {
				FUI.each.call(null, this, function(item) {
					!item.classList.contains(name) &&
						item.classList.push(name);
				});
			},
			'removeClass': function(name) {
				FUI.each.call(null, this, function(item) {
					item.classList.remove(name);
				});
			}
		},
		ensure = function(obj, fn) {
			obj = obj || new fn();
		},
		FUI = function(selector) {
			return new FUI.fn.init(selector);
		}

	/* 
	 * function
	 */
	FUI.fn = FUI.prototype = {
		version: version,
		copy: function(options) {
			for (name in options) {
				this[name] = options[name];
			}
		}
	}

	FUI.extend = FUI.fn.extend = function() {
		this.fn.copy.apply(this, arguments);
	}

	FUI.extend({
		'get': function() {
			return document.querySelectorAll(arguments[0]);
		},
		'each': function(arr, callback) {
			if (arr.length)
				for (var i = 0; i < arr.length; i++) {
					callback(arr[i], i);
				};
		}
	})

	FUI.fn.init = function(selector) {
		window.FUI = FUI;
		if (selector) {
			var els = FUI.get(selector);
			els.fcopy = function(arr) {
				for (name in arr) {
					this[name] = arr[name];
				}
			}
			els.fextend = function() {
				this.fcopy.apply(this, arguments);
			}
			els.fextend(operates);
			return els;
		}
	}

	/*
	 * bootstrap
	 */
	ensure.call(this, window.FUI, FUI);

})(window.FUI);
