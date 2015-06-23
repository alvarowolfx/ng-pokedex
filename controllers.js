(function(){
    angular.module('pokedex.controllers',[])
        .controller('PokemonsController',PokemonsController);

        PokemonsController.$inject = ['$scope', 'Pokemons'];
        function PokemonsController($scope, Pokemons){
            $scope.pokemons = [];
            $scope.carregando = true;
            Pokemons.getAll().then(function(pokemons){
                $scope.pokemons = pokemons;
                $scope.carregando = false;
            },function(){
                $scope.pokemons = [];
                $scope.carregando = false;
            });
        }
})();
