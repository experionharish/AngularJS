angular.module('countryFactory',[])
.factory('countries', function($http){
      	
      	var cachedData;

      	function getData(callback){
      		if(cachedData){
      			callback(cachedData);
      		}
      		else{
      			$http.get('countryFlag.json').success(function(data){
      				cachedData = data;
      				callback(data);
      			});
      		}
      	}

      	return {
      		list: getData,
      		find: function(name, callback){
      			getData(function(data){
      				var singleCountry = data.filter(function(entry){
					      					return entry.name===name;
					      				})[0];
      				//console.log("Finding:"+singleCountry.flagURL);
      				callback(singleCountry);
      			});	
      		}
      	};
      });