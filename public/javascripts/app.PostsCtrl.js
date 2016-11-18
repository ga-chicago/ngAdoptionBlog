/**
 * Created by codeforcoffee on 11/16/16.
 */
angular.module('adoptionBlog')
.controller('PostsCtrl', function($scope, $http, $location) {

  $scope.posts = [];

  $scope.changeRoute = function() {
    // goto create
    $location.path('/create');
  }

  $scope.fetch = function() {
    $http.get('http://localhost:9292/api/posts').success(function (results) {
      $scope.posts = results;
    }).error(function(err) {
      console.log('Fetch failed; it didn\'t happen');
      console.log(err);
    });
  }

  $scope.fetch();

});