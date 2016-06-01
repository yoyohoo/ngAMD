'use strict'
define(['app', 'angularAMD'], function(app, nga) {
    describe('app.js:', function() {

        it('app should be defined.', function() {
            expect(app).toBeDefined();
        });

        it('angularAMD must be bootstrapped', function() {
            var bootstrapped = false;
            try {
                var a = nga.appname();
                bootstrapped = true;
            } catch (err) {
                console.info(err);
            }
            expect(bootstrapped).toBe(true);
        });
    });
});
