var countryController=angular.module('countryController',[]);

countryController.controller('CountryListCtrl', function ($scope, $http, countries){
        countries.list(function(countries){
        	$scope.countries = countries;	
        });
          

      });
countryController.controller('CountryDetailCtrl', function ($scope, $http, $routeParams, countries){
 		$scope.param = $routeParams.countryName;
 		countries.list(function(countries){
 			$scope.countries = countries;
 		});

 		countries.find($scope.param,function(country){
 			$scope.country = country;
 		});
        
      });