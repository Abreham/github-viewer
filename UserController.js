// Code goes here

(function() {
  
  var module = angular.module("githubViewer");

  var UserController = function($scope, github,$routeParams) {

    var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user)
           .then(onRepos,onError);
    };
    
    var onRepos = function(data){
       $scope.repos = data;
    };
    
   var onError = function(reason) {
      $scope.error = "Could not fetch the data";
    };
    
    $scope.username = $routeParams.username;    
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($scope.username).then(onUserComplete,onError);
    
  };
  
  module.controller("UserController",UserController);
  
}());