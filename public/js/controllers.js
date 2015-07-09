var rrpCtrl = angular.module('rrpCtrl', []);

rrpCtrl.controller('CourseListCtrl', ['$scope', '$http',
  function($scope, $http) {
    //$http.get("https://raw.githubusercontent.com/bento-io/collection/gh-pages/content.json").success(function(data) {
    $http.get("content.json").success(function(data) {
        $scope.courses = data;
    });
    $scope.orderProp = 'age';
}]);

rrpCtrl.controller('CourseDetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $scope.search = function() {

          return $http.get('content.json').success(httpSuccess).error(function() {
          alert('Unable to get back informations :( ');
        });
        }

        httpSuccess = function(response) {
            $scope.courses = response;
        }

        function getById(arr, courseName) {
            for (var d = 0, len = arr.length; d < len; d += 1) {
                if (arr[d].name === courseName) {
                    return arr[d];
                }
            }
        }
        $scope.search().then(function(){
        $scope.course = getById($scope.courses, $routeParams.courseName);
      });
    }]);
