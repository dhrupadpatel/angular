(function(){
	var app = angular.module('login',['ui.router']);

	app.config(function($stateProvider,$urlRouterProvider){

		$urlRouterProvider.otherwise('/login');

		$stateProvider
		.state('login',{
			url: "/login",
			templateUrl : "src/app/login/login.tpl.html",
			controller : "LoginController"
		})
		.state('home',{
			url: "/home",
			templateUrl : "src/app/login/home.tpl.html",
			controller : "HomeController"
		})
		


	});
})();