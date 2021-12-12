(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("ParticipanteFormController", ParticipanteFormController);

    ParticipanteFormController.$inject = [
        "ParticipanteService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function ParticipanteFormController(
        ParticipanteService,
        $location,
        $routeParams
    ) {

        var vm = this;

        function inicializaPropriedades() {
            vm.cadastro = {};
            vm.auxiliar = {};
            vm.titulo = "Novo Participante";
            vm.item = null;
        }

        function inicializaMetodos() {
            vm.salvar = salvar;
            vm.atualizaItemLicitacao = atualizaItemLicitacao;
            vm.calculaValorTotal = calculaValorTotal;
        }

        inicializaPropriedades();
        inicializaMetodos();

        activate();

        function activate() {
            if ($routeParams.id) {
                ParticipanteService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Participante";
                });
            }
        }

        function salvar() {
            ParticipanteService.save(vm.cadastro).success(function () {
                $location.path("/participante");
                alert("Participante cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

        function atualizaItemLicitacao() {
            vm.cadastro.itemLicitacao.id = vm.auxiliar.itemLicitacao.id;
        }

        function calculaValorTotal() {
            if(vm.cadastro.quantidade && vm.cadastro.valorUnitario) {
                vm.cadastro.valorTotal = vm.cadastro.quantidade * vm.cadastro.valorUnitario;
            }
        }

    }
})();