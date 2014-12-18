var myApp = angular.module('myApp', []);
	myApp.controller('TodoController', ['$scope', function($scope) {
        $scope.User = [{}];
		$scope.add = function (name,country,sec,score)
		{
			var data = 
			{
				 name    :name,
				 country :country,
				 sec     :sec ,
				 score   :score
			};

			console.log(data);

			$scope.User.push(data);			
		}

    }]);
