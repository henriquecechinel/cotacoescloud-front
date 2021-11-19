(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("MunicipioListController", MunicipioListController);

        MunicipioListController.$inject = ["MunicipiosService"];

    function MunicipioListController(MunicipiosService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            MunicipiosService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            MunicipiosService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();