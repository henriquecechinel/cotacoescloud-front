(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("PropostaListController", PropostaListController);

    PropostaListController.$inject = ["PropostaService"];

    function PropostaListController(PropostaService) {
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
            PropostaService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            PropostaService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();