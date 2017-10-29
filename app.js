(function (){
	'use strict';
	
	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);
	
	LunchCheckController.$inject = ['$scope'];
	
	function LunchCheckController ($scope){
		
		$scope.message = " ";
		$scope.numberOfItems = 0;
	
		$scope.calculateNumberOfItems =	function (){
			var wordArray = [];
			console.log($scope.typedText);
			
			if ($scope.typedText == undefined){
				$scope.message = "Please enter data first";
			} else {
				wordArray = $scope.typedText.split(',');
				$scope.numberOfItems = wordArray.length;
				
				if($scope.numberOfItems <= 3){
					$scope.message = "Enjoy!";
				}

				if($scope.numberOfItems > 3){
					$scope.message = "Too much!";
				}
			}
			
			
			
			
		}
	
	
	
	};
	

	
})();





		