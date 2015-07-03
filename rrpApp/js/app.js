var rrpApp = angular.module('rrpApp', [
  'ngRoute',
  'rrpCtrl'
]);

rrpApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/course', {
        templateUrl: 'views/courseList.html',
        controller: 'CourseListCtrl'
      }).
      when('/course/:courseName', {
        templateUrl: 'views/courseDetail.html',
        controller: 'CourseDetailCtrl'
      }).
      when('/login', {
        templateUrl: 'views/login.html',
        controller: 'CourseDetailCtrl'
      }).
      when('/register', {
        templateUrl: 'views/register.html',
        controller: 'CourseDetailCtrl'
      }).
      otherwise({
        redirectTo: '/course'
      });
  }]);
