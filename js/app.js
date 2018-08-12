(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  $scope.profesores = {};

  $http.get('json/profesores.json').then(function(data){
  		$scope.profesores = data.profesores;
  });


  



}]);





})();
