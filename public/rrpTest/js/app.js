(function () {
    'use strict';

    angular
        .module('rrpApp', ['ngRoute', 'ngCookies','rrpCtrl'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $routeProvider.
          when('/course', {
            templateUrl: 'views/courseList.html',
            controller: 'CourseListCtrl'
          }).
          when('/course/:courseName', {
            templateUrl: 'views/courseDetail.html',
            controller: 'CourseDetailCtrl',
            controllerAs: 'vm'
          }).
          when('/login', {
            templateUrl: 'login/login.view.html',
            controller: 'LoginController',
            controllerAs: 'vm'

          }).
          when('/register', {
            templateUrl: 'register/register.view.html',
            controller: 'CourseDetailCtrl',
            controllerAs: 'vm'

          }).
          when('/todo')
          otherwise({
            redirectTo: '/course'
          });
        }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
    function run($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
    }

})();
