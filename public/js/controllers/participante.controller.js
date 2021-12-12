(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("ParticipanteListController", ParticipanteListController);

    ParticipanteListController.$inject = ["ParticipanteService"];

    function ParticipanteListController(ParticipanteService) {
        var vm = this;

        function inicializaPropriedades() {
            vm.item = null;
            vm.itens = [];
            vm.busca = "";
        }

        function inicializaMetodos() {
            vm.remover = remover;
            vm.buscar = activate;
        }

        inicializaPropriedades();
        inicializaMetodos();

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            ParticipanteService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            ParticipanteService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();