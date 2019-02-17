// home-index.js
var myApp = angular.module('homeIndex', ['ngRoute']);

myApp.config(['$locationProvider', function config($locationProvider) {
    $locationProvider.hashPrefix("");
}]);

myApp.config(['$routeProvider', function config($routeProvider) {
    $routeProvider.
        when("/", {
            controller: "topicsController",
            templateUrl: "/templates/topicsView.html"
        }).
        when("/newmessage", {
            controller: "newTopicController",
            templateUrl: "/templates/newTopicView.html"
        }).
        otherwise({ redirectTo: "/" });
}]);


myApp.controller('topicsController', ['$scope', '$http', function ($scope, $http) {
    $scope.data = [];
    $scope.isBusy = true;

    $http.get("/api/v1/topics?includeReplies=true")
        .then(
            function (result) {
                // Successful
                angular.copy(result.data, $scope.data);
            },
            function () {
                // error
                alert("could not load topics");
            }
        )
        .then(function () {
            $scope.isBusy = false;
        })
}
]);


myApp.controller('newTopicController', ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $scope.newTopic = {};

    $scope.save = function () {
        $http.post("/api/v1/topics", $scope.newTopic)
            .then(function (result) {
               // successful 
                var newTopic = result.data;

                // TODO merge with existing list of topics

                $window.location = "#/";
            },
            function () {
                alert("cannot save the new topic");
            })
    };
}
]);