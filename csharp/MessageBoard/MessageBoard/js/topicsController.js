// topicsController.js

    var myApp = angular.module('homeIndex', []);

    myApp.controller('topicsController', ['$scope', function ($scope) {
        $scope.message = "test";
    }]);
 

//myApp.controller('homeController', ['$scope', function ($scope) {
//    alert("I am in the home controller");
//}]);
