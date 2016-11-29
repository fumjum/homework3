var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
	function($scope, $http) {
	console.log("Hello World from contoller");
	
	var refresh = function(){
		$http.get('/resume').success(function(response){
			console.log("Got data!");
			$scope.resume = response;
		});
	};
	
	refresh();
		
}]);