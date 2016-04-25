(function(angular) {
  'use strict';
angular.module('defaultDrinksSelect', [])

  .filter('convertToTime', function()  {
    //Converts Minutes to seconds from which it calculates hours, days and back to minutes.
    return function(myMinutes) {
    var seconds = Math.floor(myMinutes * 60);
    var days = Math.floor(seconds / 86400);
    var hours = Math.floor((seconds % 86400) / 3600);
    var minutes = Math.floor(((seconds % 86400) % 3600) / 60);
    var timeString = '';
    //calculates if Days,Hours and Minutes need to be mentioned and or plural.
    if(days > 0) timeString += (days > 1) ? (days + " days ") : (days + " day ");
    if(hours > 0) timeString += (hours > 1) ? (hours + " hours ") : (hours + " hour ");
    if(minutes > 0) timeString += (minutes > 1) ? (minutes + " minutes ") : (minutes + " minute ");
    return timeString;
    };
  })
  
.controller('MainController', ['$scope', function($scope) {
    //Drinks Array, Units = Units of alcohol
     $scope.drinks = {
       availableOptions: [
         {id: '1', name: 'White Wine - 11% - 175ml', units:1.9, calories:210},
         {id: '2', name: 'Red Wine - 14% - 175ml', units:2.4, calories:241},
         {id: '3', name: 'Beer - 4% - 440ml', units:1.76, calories:189},
         {id: '4', name: 'Clear spirits shot - 40% - 35ml' , units:1.4, calories:72},
         {id: '5', name: 'Dark spirits shot - 40% - 35ml', units:1.4, calories:78},
         {id: '6', name: 'Typical Cider - 5% - 440ml', units:2.2, calories:210},
         {id: '8', name: 'Extra Special / Strong Bitter - 5.5% - 500ml', units:2.75, calories:177},
         {id: '9', name: 'IPA - 4.7% - 355ml', units:1.67, calories:144},
         {id: '10', name: 'English Strong Ale - 6.60% - 500ml', units:3.3, calories:200},
         {id: '11', name: 'Sparkling Wine - 12% - 120ml', units:1.44, calories:87}
        ],
      //This sets the default value of the drinks select
      selectedOption: {id: '1', name: 'Light White Wine', units:1.51, calories:210}
     };
     //Excercise Array, cbpm Calories burnt per minute    
     $scope.excercises = {
       excerciseOptions: [
         {id: '1', name: 'Walking at 2.3 mph', cbpm:3.5},
         {id: '2', name: 'Jogging at 5 mph', cbpm:10.8},
         {id: '3', name: 'Bicycling at 14 mph', cbpm:12},
         {id: '4', name: 'Bicycling above 20mph', cbpm:20},
         {id: '5', name: 'Swimming Laps', cbpm:12.5}
       ],
     //This sets the default value of the excercise select
      excerciseOption: {id: '1', name: 'Walking at 2.3 mph', cbpm:3.5} 
     };
    }]);
})(window.angular);


