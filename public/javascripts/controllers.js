var myApp = angular.module('soccerLeagueApp', []);

myApp.controller('StandingsController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://ec2-35-165-48-58.us-west-2.compute.amazonaws.com:3000/standings').then(function(data) {
   		console.log(data);
   		$scope.teamlist = angular.fromJson(data.data);
   		console.log($scope.teamlist[0].team_name);
   		$scope.teamOrder= "wins";
  });
}]);
