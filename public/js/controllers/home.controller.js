(function() {
    "use strict";

    angular.module("MyApp").controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$location", "$window"];

    function HomeController($rootScope, $location, $window) {
        var vm = this;
        var itemSelecionado = -1;

        vm.municipiosPage = municipiosPage;
        vm.estadosPage = estadosPage;

        activate();

        function activate() {
        }

        function municipiosPage() {
            $location.path("/municipio");
        }

        function estadosPage() {
            $location.path("/estado");
        }
    }
})();