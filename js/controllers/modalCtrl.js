'use strict'
define(['app', 'services/calculateService'], function(app) {
	app.controller('modalController', ['csum', function(csum) {
		console.info('calculate: ', csum.Sum('aaa', 'bbb'));
	}])
})
