# ngAMD
angularjs with requirejs


//动态加载directive：
VIEW:
	<div class="col-lg-12" ng-app="clientApp" ng-controller="clientController">
		<div class="container">
			<hr>
			<client-Header></client-Header>
			<a class="btn btn-primary" href="" ng-click="getClients()" title="">Append Table Directive</a>
			<!-- <client-Search></client-Search> //应该加载到这
			<client-Table/> -->
		</div>
	</div>
		
DIRECTIVE:
angular.module('clientDirectives',[])
.directive('clientHeader',function(){
	return {
		restrict:'E',
		scope:{},
		controller:function($scope){
			$scope.title='customers';
			$scope.tip='Filter by name:';
		},
		template:'<h2>{{title}}</h2><label for="basic-url">{{tip}}</label>'
	}
}).directive('clientSearch',function(){
	return {
		restrict:'ACE',
		template:'<div class="input-group"><span class="input-group-addon">Name:</span><input type="text" class="form-control" aria-describedby="basic-addon3" ng-model="nameFilter"></div>'
	}
}).directive('clientTable',function(){
	return {
		restrict:'ACE',
		//scope:true || {},//inherit scope from controller or custom a new one
		template:'<table class="table table-hover"><thead><tr><th>Name</th><th>City</th><th>Country</th></tr></thead><tbody><tr ng-repeat="c in customers | oddItems | filter:{Name:nameFilter}:false | limitTo:20" ng-click="alert(c.Name)"><td>{{c.Name}}</td><td>{{c.City}}</td><td>{{c.Country}}</td></tr></tbody></table>',
		//templateUrl: 'templates/clientTable.html',
		link:function(scope, element){//run after directive compiled
			console.info(element);
		},
		attrs:{
			type:'',
			animation:'fade'
		}
	}
})
		
CONTROLLER:
$scope.getUrlData = function(url, callback) {
	return getData(url, callback);
}
$scope.appendSearchTable = function() {
	var container = angular.element('.container'),
		compile = $compile('<client-Search></client-Search><client-Table/>')($scope);
	container.append(compile);
}
$scope.getClients = function() {
	$scope.getUrlData('http://www.w3schools.com/angular/customers.php', function(r) {
		$scope.customers = r.data.records;
		$scope.appendSearchTable();
	}, function(r) {
		alert(r);
	})
}
