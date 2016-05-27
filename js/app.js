'use strict';
define(['angularAMD',
    'angular-route',
    'angular-mocks',
    'ui-bootstrap',
    'ui-kendo',
    'common/base'
], function(ngAMD) {
    var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);
    app.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {

            /* 
             * remove the # from base url, 
             * yet can't use the angular hash directly, 
             * such as "/alert"
             */
            $locationProvider.html5Mode(true);

            // cssInjectorProvider.setSinglePageMode(true);

            $routeProvider.caseInsensitiveMatch = true;

            $routeProvider
                .when('/home', ngAMD.route({
                    templateUrl: 'tpl/home.html',
                    controller: 'homeController',
                    controllerUrl: 'controllers/homeCtrl'
                }))
                .when('/alert', ngAMD.route({
                    templateUrl: 'tpl/alert.html',
                    controller: 'alertController',
                    controllerUrl: 'controllers/alertCtrl'
                }))
                .when('/autoComplete', ngAMD.route({
                    templateUrl: 'tpl/autoComplete.html',
                    controller: 'autoCompleteController',
                    controllerUrl: 'controllers/autoCompleteCtrl'
                }))
                .when('/comboBox', ngAMD.route({
                    templateUrl: 'tpl/comboBox.html',
                    controller: 'comboBoxController',
                    controllerUrl: 'controllers/comboBoxCtrl'
                }))
                .when('/css', ngAMD.route({
                    templateUrl: 'tpl/css.html',
                    controller: 'cssController',
                    controllerUrl: 'controllers/cssCtrl'
                }))
                .when('/datePicker', ngAMD.route({
                    templateUrl: 'tpl/datePicker.html',
                    controller: 'datePickerController',
                    controllerUrl: 'controllers/datePickerCtrl'
                }))
                .when('/function', ngAMD.route({
                    templateUrl: 'tpl/function.html',
                    controller: 'functionController',
                    controllerUrl: 'controllers/functionCtrl'
                }))
                .when('/grid', ngAMD.route({
                    templateUrl: 'tpl/grid.html',
                    controller: 'gridController',
                    controllerUrl: 'controllers/gridCtrl'
                }))
                .when('/modal', ngAMD.route({
                    templateUrl: 'tpl/modal.html',
                    controller: 'modalController',
                    controllerUrl: 'controllers/modalCtrl'
                }))
                .when('/plugin', ngAMD.route({
                    templateUrl: 'tpl/plugin.html',
                    controller: 'pluginController',
                    controllerUrl: 'controllers/pluginCtrl'
                }))
                .when('/select', ngAMD.route({
                    templateUrl: 'tpl/select.html',
                    controller: 'selectController',
                    controllerUrl: 'controllers/selectCtrl'
                }))
                .when('/testing', ngAMD.route({
                    templateUrl: 'tpl/testing.html',
                    controller: 'testingController',
                    controllerUrl: 'controllers/testingCtrl'
                }))
                .otherwise({
                    redirectTo: '/home'
                });
        }
    ]);
    return ngAMD.bootstrap(app);
});
