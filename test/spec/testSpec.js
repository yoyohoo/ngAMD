'use strict'
define(['app', 'angularAMD', 'controllers/testingCtrl'], function(app, nga) {
	describe('test-controller.js', function() {
		var scope, ctrl, compiledTpl;
		beforeEach(function() {
			nga.inject(function($rootScope, $controller, $templateCache, $compile) {
				scope = $rootScope.$new();
				ctrl = $controller('testingController', {
					$scope: scope
				});

				compiledTpl = $compile('<select>{{scope.firstCities}}</select>')(scope);
				scope.$digest();
			});
		});


		it('Should have 4 first cities ', function() {
			expect(scope.firstCities.length).toBe(4);
		})
		it('aaa', function() {
			expect(typeof compiledTpl).toBe('object');
			console.info(compiledTpl);
		})

	});
});
