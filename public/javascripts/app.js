console.log('The BEST PET ADOPTION BLOG evar!@!2');


angular.module('adoptionBlog', [ 'ngRoute'
]).config([
  '$locationProvider',
  '$routeProvider',
  function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false // good for anything IE9+
    })

    $routeProvider
      .when('/', {
        templateUrl: 'ngViews/home.html',
        controller: 'PostsCtrl'
      })
      .when('/create', {
        templateUrl: 'ngViews/create.html',
        controller: 'AdminCreateCtrl'
      });

    $routeProvider.otherwise({ redirectTo: '/' });
  }
]);