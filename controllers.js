(function(){
    angular.module('pokedex.controllers',[])
        .controller('PokemonsController',PokemonsController);

        PokemonsController.$inject = ['$scope', 'Pokemons'];
        function PokemonsController($scope, Pokemons){
            $scope.pokemons = [];
            Pokemons.getAll().then(function(pokemons){
                $scope.pokemons = pokemons;
            },function(){
                $scope.pokemons = [];
            });
        }
})();
