/**
 * 
 */

(function () {
	'use strict';
	
	var app = angular.module("app", ['ngRoute']);
	
	app.config(function ($routeProvider) {
		$routeProvider
		
		//route pour la page d'acceuil
		.when('/acceuil', {
			templateUrl: "vues/acceuil.html",
			controller: 'acceuilController'
		})
		
		//route pour la page d'articles
		.when('/articles', {
			templateUrl: 'vues/articles.html',
			controller: 'articlesController'
		})
			
		//route pour la page de contact
		.when('/contact', {
			templateUrl: 'vues/contact.html',
			controller: 'contactController'
		})
		
		.otherwise({
			redirectTo: '/acceuil'
		});
	});
	
})();

(function () {
	'use strict';
	
	angular
		.module('app')
		.controller('acceuilController', acceuilController);
	
	acceuilController.$inject = ['$scope'];
	
	function acceuilController($scope) {
		$scope.messageAcceuil = "message de la page d'acceuil depuis le controleur";
	}
})();

(function () {
	'use strict';
	
	angular
		.module('app')
		
		.controller('articlesController', articlesController);
	
	articlesController.$inject = ['$scope'];
	
	function articlesController($scope) {
		$scope.articles = [];
		
		var article1 = {titre: "article1", texte: "jus de fruits"};
		var article2 = {titre: "article2", texte: "pastèque"};
		
		$scope.articles.push(article1, article2);
	}
})();

(function () {
	'use strict';
	
	angular
		.module('app')
		.controller('contactController', contactController);
	
	contactController.$inject = ['$scope'];
	
	function contactController($scope) {

	}
})();