console.log('The BEST PET ADOPTION BLOG evar!@!2');


angular.module('adoptionBlog', [ 'ngRoute'
]).config([
  '$locationProvider',
  '$routeProvider',
  function($locationProvider, $routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'ngViews/home.html',
        controller: 'PostsCtrl'
      });

    $routeProvider.otherwise({ redirectTo: '/' });
  }
]);