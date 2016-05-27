define(['app', 'fui/fui.core'], function(app) {
	'use strict';
	app.directive('draggable', function($document) {
		return function(scope, element, attr) {
			var startX = 0,
				startY = 0,
				endX = 0,
				endY = 0,
				mousemove = function(event) {
					endY = event.screenY - startY;
					endX = event.screenX - startX;
					element.css({
						top: endY + 'px',
						left: endX + 'px'
					});
				},
				mouseup = function() {
					$document.off('mousemove', mousemove);
					$document.off('mouseup', mouseup);
				};
			element.css({
				position: 'relative',
				cursor: 'pointer',
				display: 'inline-block'
			});
			element.on('mousedown', function(event) {
				event.preventDefault();
				startX = event.screenX - endX;
				startY = event.screenY - endY;
				$document.on('mousemove', mousemove);
				$document.on('mouseup', mouseup);
			});
		};
	});
})
