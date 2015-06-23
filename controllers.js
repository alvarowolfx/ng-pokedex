(function(){
    angular.module('pokedex.controllers',[])
        .controller('PokemonsController',PokemonsController);

        PokemonsController.$inject = ['$scope'];
        function PokemonsController($scope){
            var pokemons = [
            {
                name: 'Pikachu'
            },
            {
                name: 'Charmander'
            }
            ];
            $scope.pokemons = pokemons;
        }
})();
