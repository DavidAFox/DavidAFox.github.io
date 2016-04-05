angular.module('githubApp',['ngRoute', 'gameOfLifeModule', 'chatInterface']).
	config(function ($routeProvider){
		$routeProvider.
			when("/",{templateUrl: "partials/home.html"}).
			when("/gameoflife", {templateUrl: "partials/game_of_life_view.html"}).
			when("/aboutme", {templateUrl: "partials/about.html"}).
			when("/books", {templateUrl: "partials/books.html"}).
			when("/chat", {templateUrl: "partials/chat.html"})
	}).
	directive('dNavbar', function(){
		var controller =['$scope', '$location', function($scope, $location) {
			this.active = function(path) {
				if(path === $location.path()) {
					return 'd-active';
				}

				return '';
			}
		}];
		return {
			templateUrl: 'partials/navbar.html',
			restrict: 'E',
			controller: controller,
			controllerAs: 'NavController'
		}
	}).
	directive('dSidebar', function(){
		return {
			templateUrl: 'partials/sidebar.html',
			restrict: 'E'
		}
	})