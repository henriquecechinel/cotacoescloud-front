(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("PropostaFormController", PropostaFormController);

    PropostaFormController.$inject = [
        "PropostaService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function PropostaFormController(
        PropostaService,
        $location,
        $routeParams
    ) {

        var vm = this;

        function inicializaPropriedades() {
            vm.cadastro = {};
            vm.auxiliar = {};
            vm.titulo = "Nova Proposta";
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
                PropostaService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Proposta";
                });
            }
        }

        function salvar() {
            PropostaService.save(vm.cadastro).success(function () {
                $location.path("/proposta");
                alert("Proposta cadastrada com sucesso!!");
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