var app = angular.module('quote-tool', ['ngRoute', 'quote-tool.modules-all', 'quote-tool.templates']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/propertyInfo', {
			templateUrl: 'property-info/property-info.html'
		})
		.when('/packagesAndServices', {
			templateUrl: 'packages-services/packages-services.html'
		})
		.when('/Schedule', {
			templateUrl: 'course/search/materials/materials.html'
		})
		.when('/summary', {
			templateUrl: 'course/search/materials/materials.html'
		})
		.otherwise({
			redirectTo: '/search'
		});
}]);

app.config(['$locationProvider', '$httpProvider', function ($locationProvider, $httpProvider) {}]);

// app.run(function(Session) {
//     if (!Session.isAuthenticated()) {
//         Session.redirectToLogin();
//     }
// });

// app.controller('SessionController', function ($scope,$rootScope,$toaster, Session, Config, http) {
//     $scope.showNavigation = true;

//     $scope.$on('$routeChangeStart', function (next, current) {
//         if(current.$$route && current.$$route.originalPath.startsWith('/edit/:course')){
//             $scope.showNavigation = false;
//         }
//     });

//     //Check wether user authenticated before move to a new page
//     $scope.$on('$locationChangeStart', function (event,path) {
//         if (!Session.isAuthenticated()) {
//             event.preventDefault();
//             Session.redirectToLogin();
//         }
//     });

//     $scope.$on('httpRequestTimeout',function(){
//         $toaster.pop({
//             message: 'We couldn\'t open this page. Try again',
//             type: 'error',
//             translate: false
//         });

//        $rootScope.$broadcast('hide-spinner');
//     });
// });
angular.module('quote-tool.menu', []);


angular.module('quote-tool.modules-all', [
	'quote-tool.menu'
]);

var app = angular.module('quote-tool.menu');

app.directive('menu', ['$templateCache', function ($templateCache) {
	return {
		restrict: 'E',
		template: $templateCache.get('menu/menu.html'),
		controller: ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {

		}],
		controllerAs: 'navi'
	};
}]);
