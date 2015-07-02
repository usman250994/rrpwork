var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
  $scope.myname="eltaf";
});

phonecatControllers.controller('CourseList', ['$scope', '$http',
  function($scope, $http) {
    //$http.get("https://raw.githubusercontent.com/bento-io/collection/gh-pages/content.json").success(function(data) {
    $http.get("content.json").success(function(data) {
        $scope.courses = data;
    });

    $scope.orderProp = 'age';
}]);
