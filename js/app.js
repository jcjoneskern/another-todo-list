angular.module("app", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "views/welcome.html"
            })
            .when("/list", {
                templateUrl: "views/list.html"
            })
            .otherwise({
                redirectTo: "/"
            });
    });