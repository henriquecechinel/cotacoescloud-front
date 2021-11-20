(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("MunicipioFormController", MunicipioFormController);

    MunicipioFormController.$inject = [
        "MunicipioService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function MunicipioFormController(
        MunicipioService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.municipio = {};
        vm.titulo = "Novo Município";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                MunicipioService.findById($routeParams.id).success(function (data) {
                    vm.municipio = data;
                    vm.titulo = "Editando Muncípio";
                });
            }
        }

        function salvar() {
            MunicipioService.save(vm.municipio).success(function () {
                $location.path("/municipio");
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