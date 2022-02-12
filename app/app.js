var MyApp = angular.module('MyApp', ['ngRoute']);
MyApp.config(function ($routeProvider) {
        $routeProvider
                .when('/', {
                        templateUrl: 'partials/home.html',
                        controller: 'PostsCtrl'
                })
                .when('/comments/:id', {
                        templateUrl: 'partials/comments.html',
                        controller: 'CommentsCtrl'
                })
                .otherwise({
                        redirectTo: '/'
                });
});