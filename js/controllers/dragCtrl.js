/*
 * @Author: xz06213
 * @Date:   2016-06-15 17:03:58
 * @Last Modified by:   xz06213
 * @Last Modified time: 2016-06-15 18:04:13
 */

'use strict';
define(['app', 'fui/fui.drag'], function(app) {
	app.controller('dragController', ['$scope', function($scope) {
		$scope.imgBorderStyle = {
			'cursor': 'pointer',
			'border': '10px solid transparent',
			'padding': '15px',
			'border-image': 'url(images/border.png) 30 stretch'
		}
		$scope.fontBorderStyle = {
			'text-shadow': '#eee 0px 12px'
		}
	}])
})
