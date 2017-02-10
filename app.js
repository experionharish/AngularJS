var countryApp = angular.module('countryApp', ['ngRoute', 'countryController', 'countryFactory', 'countryDirective']);
     
      countryApp.config(function($routeProvider) {
        $routeProvider.
          when('/', {
          	templateUrl: 'country-list1.html',
            controller: 'CountryListCtrl'
          }).
          when('/:countryName', {
          	templateUrl: 'country-details.html',
            controller: 'CountryDetailCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
      });

      

      countryApp.directive('country', function(){
      		return{
      			scope:{
      				country: '='
      			},
      			restrict: 'A',
      			templateUrl: 'country.html',
      			controller: function($scope,countries){
      				countries.find($scope.country.name,function(country){
      					$scope.flagURL = country.flagURL;
      				});	
      			}
      		};
      });
      countryApp.filter('encodeURI', function(){
          return window.encodeURI;
      });