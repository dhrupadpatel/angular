(function(){

	var app = angular.module('login');

	app.controller('LoginController',function($scope,UsersService,$state){

		console.log("Hi Login!");
		$scope.login = function(){
			var user = UsersService.login($scope.User);
			console.log(user);
			if(user === true)
			{
				console.log('aaya');
				$state.go('home');
			}
			else{
				alert("invalid username");
			}
		}
	});

})();