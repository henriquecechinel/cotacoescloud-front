angular
    .module("MyApp", ["ngRoute", "satellizer"])
    .config(function($routeProvider, $locationProvider, $authProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: "partials/home.html",
            })
            .when("/home", {
                templateUrl: "partials/home.html",
            })
            .when("/municipio", {
                templateUrl: "partials/municipio.html",
            })
            .when("/municipio/:id", {
                templateUrl: "partials/municipio-form.html",
            })
            .when("/municipio/new", {
                templateUrl: "partials/municipio-form.html",
            })
            .when("/estado", {
                templateUrl: "partials/estado.html",
            })
            .when("/estado/:id", {
                templateUrl: "partials/estado-form.html",
            })
            .when("/estado/new", {
                templateUrl: "partials/estado-form.html",
            })
            .when("/proposta", {
                templateUrl: "partials/proposta.html",
            })
            .when("/proposta/:id", {
                templateUrl: "partials/proposta-form.html",
            })
            .when("/proposta/new", {
                templateUrl: "partials/proposta-form.html",
            })
            .when("/participante", {
                templateUrl: "partials/participante.html",
            })
            .when("/participante/:id", {
                templateUrl: "partials/participante-form.html",
            })
            .when("/participante/new", {
                templateUrl: "partials/participante-form.html",
            })
            .otherwise({
                templateUrl: "partials/404.html",
            });
    })
    .run(function($rootScope, $window) {
        
    })
    .directive("ngConfirmClick", [
        function() {
            return {
                link: function(scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind("click", function(event) {
                        if (window.confirm(msg)) {
                            scope.$eval(clickAction);
                        }
                    });
                },
            };
        },
    ]);