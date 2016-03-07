var myApp = angular.module('myApp',['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers',[]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/design', {
            templateUrl: "/views/routes/design.html"
        }).
        when('/nice_art', {
            templateUrl: "/views/routes/nice_art.html"
        }).
        when('/resume', {
            templateUrl: "/views/routes/resume.html"
        }).
        when('/the_rest', {
            templateUrl: "/views/routes/the_rest.html"
        }).
        when('/web', {
            templateUrl: "/views/routes/web.html"
        }).
        when('/writing', {
            templateUrl: "/views/routes/writing.html"
        }).
        otherwise({
            templateUrl: '/views/routes/first.html'
        });
}]);
