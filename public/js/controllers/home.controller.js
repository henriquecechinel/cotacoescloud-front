(function() {
    "use strict";

    angular.module("MyApp").controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$location", "$window"];

    function HomeController($rootScope, $location, $window) {
        var vm = this;
        var itemSelecionado = -1;

        vm.municipiosPage = municipioPage;
        vm.estadosPage = estadoPage;
        vm.propostaPage = propostaPage;

        activate();

        function activate() {
        }

        function municipioPage() {
            $location.path("/municipio");
        }

        function estadoPage() {
            $location.path("/estado");
        }

        function propostaPage() {
            $location.path("/proposta");
        }
    }
})();