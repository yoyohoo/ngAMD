'use strict'
define(['angular', 'jq'], function() {
	var wd = window,
		ap = Array.prototype;
	wd.ng = angular;
	wd.$el = ng.element ||
		document.QuerySelectorAll;
	wd.removeEl = function(el) {
		el && el.parentNode &&
			el.parentNode.removeChild(el);
	}
	wd.removeParentEl = function(el) {
		el && el.parentNode &&
			removeEl(el.parentNode);
	}
	ap.Contains = function(value) {
		var result = false;
		for (var i = this.length - 1; i >= 0; i--) {
			if (this[i] == value) result = true;
		};
		return result;
	}
	ap.getKey = function(value) {
		var result = 1;
		for (var i = this.length - 1; i >= 0; i--) {
			for (var o in this[i]) {
				if (this[i][o] && this[i][o].toString().toUpperCase() == value.toUpperCase())
					result = this[i].id;
			}
		};
		return result;
	}
	ap.ContainsKey = function(key) {
		var result = false;
		for (var i = this.length - 1; i >= 0; i--) {
			for (var o in this[i]) {
				if (this[i][o] && this[i][o].toString().toUpperCase() == key.toUpperCase())
					result = true;
			}
		}
		return result;
	}
});
