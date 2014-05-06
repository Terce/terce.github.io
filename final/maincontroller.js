app.controller("MainController", function($scope){
		$scope.people = [
			{
				id: 0,
				name: 'Daryl Dixon',
				live: true
			},
			{
				id: 1,
				name: 'Chris Redfield',
				live: true
			},
			{
				id: 2,
				name: 'Lucy Watson',
				live: true
			},
			{
				id: 3,
				name: 'Luke Skywalker',
				live: true
			}
		];
		
		$scope.newPerson = null;
	    $scope.addNew = function() {
	        if ($scope.newPerson != null && $scope.newPerson != "") {
	            $scope.people.push({
	                id: $scope.people.length,
	                name: $scope.newPerson,
	                live: true,
	            });
	        }
	    }
		
});