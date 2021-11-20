(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("MunicipioListController", MunicipioListController);

        MunicipioListController.$inject = ["MunicipioService"];

    function MunicipioListController(MunicipioService) {
        var vm = this;

        
        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            MunicipioService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            MunicipioService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();