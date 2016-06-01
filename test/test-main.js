! function() {
    'use strict';

    /*
    Create list of file to run in test.  Making sure that app_test.js is
    always the first to run
    */
    var firstFile, firstFileREGEXP = /app_test\.js$/i,
        testFiles = [],
        testFilesREGEXP = /(spec|test)\.js$/i;

    Object.keys(window.__karma__.files).forEach(function(file) {
        if (firstFileREGEXP.test(file)) {
            firstFile = file;
        } else if (testFilesREGEXP.test(file)) {
            testFiles.push(file);
        }
    });

    if (firstFile) {
        testFiles.unshift(firstFile);
    }

    require.config({

        baseUrl: '/base/js',
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
        // deps: ['app']

        deps: testFiles,

        callback: window.__karma__.start,
    });
}();
