(function(){
    angular.module('pokedex.controllers',[])
        .controller('PokemonsController', PokemonsController)
        .controller('PokemonDetailController', PokemonDetailController);

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

        PokemonDetailController.$inject = ['$scope', '$state', 'Pokemons'];
        function PokemonDetailController($scope, $state, Pokemons){
            var pokeId = $state.params.id;

            $scope.pokemon = {};
            Pokemons.get(pokeId).then(function(pokemon){
                $scope.pokemon = pokemon;
            },function(){
                $scope.pokemon = {};
            });
        }
})();
