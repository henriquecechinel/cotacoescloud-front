(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("MuncipioFormController", MuncipioFormController);

    MuncipioFormController.$inject = [
        "MuncipioService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function MuncipioFormController(
        MuncipioService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.muncipio = {};
        vm.titulo = "Nova Muncipio";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                MuncipioService.findById($routeParams.id).success(function (data) {
                    vm.municipio = data;
                    vm.titulo = "Editando Muncípio";
                });
            }
        }

        function salvar() {
            MuncipioService.save(vm.Muncipio).success(function () {
                $location.path("/muncipios");
                alert("Muncípio cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();