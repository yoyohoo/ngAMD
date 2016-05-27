define(['app'], function(app) {
	app.service('getJson', ['$http', function($http) {
			return function(url, successCallback, errorCallback) {
				return $http.get(url).then(function(response) {
					successCallback(response);
				}, function(response) {
					errorCallback && errorCallback(response);
				})
			}
		}])
		.factory('getJsonp', ['$http', function($http) {
			return function(url) {
				return $http.jsonp(url);
			}
		}])
})
