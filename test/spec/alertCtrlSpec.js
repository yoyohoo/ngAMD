'use strict'
define(['app', 'angularAMD', 'controllers/alertCtrl'], function(app, nga) {
    describe('alert-controller.js', function() {
        var scope, ctrl;
        beforeEach(function() {
            nga.inject(function($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller('alertController', {
                    $scope: scope
                });
            });
        });

        it('should have scope. in controller', function() {
            expect(scope.showContentAlert).toBeDefined();
        });
        it('should have scope.showContentAlert to be function', function() {
            expect(typeof scope.showContentAlert).toBe('function');
        });
    });
});
