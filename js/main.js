'use strict';
require.config({
	baseUrl: 'js',
	paths: {
		'jq': 'lib/jquery.min',
		'ui-bootstrap': 'lib/ui-bootstrap-tpls-1.3.2',
		'angular': 'lib/angular',
		'angular-route': 'lib/angular-route',
		'angular-css-injector': 'lib/angular-css-injector',
		'angularAMD': 'lib/angularAMD',
		'ui-kendo': 'lib/kendo.all.min',
		'angular-mocks': 'lib/angular-mocks'
	},
	shim: {
		'ui-kendo': ['jq'],
		'ui-bootstrap': ['jq', 'angular'],
		'angularAMD': ['angular'],
		'angular-route': ['angular'],
		'angular-css-injector': ['angular'],
		'angular-mocks': ['angular']
	},
	deps: ['app']
});
