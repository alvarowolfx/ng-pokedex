(function(){
    angular.module('pokedex.controllers',[])
        .controller('PokemonsController', PokemonsController)
        .controller('PokemonDetailController', PokemonDetailController)
        .controller('MovesController', MovesController);

        PokemonsController.$inject = ['$scope', 'Pokemons', 'Historico'];
        function PokemonsController($scope, Pokemons, Historico){
            Historico.clear();

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

        PokemonDetailController.$inject = ['$scope', '$state', 'Pokemons', 'Historico'];
        function PokemonDetailController($scope, $state, Pokemons, Historico){
            var pokeId = $state.params.id;

            $scope.$state = $state;

            $scope.pokemon = {};
            Pokemons.get(pokeId).then(function(pokemon){
                $scope.pokemon = pokemon;
                Historico.pushState(pokemon.name)
            },function(){
                $scope.pokemon = {};
            });
        }

        MovesController.$inject = ['$scope', 'Pokemons'];
        function MovesController($scope, Pokemons){
            $scope.movimento = null;
            $scope.isActive = function(moveId){
                if($scope.movimento){
                    return $scope.movimento.id == parseInt(moveId);
                }
                return false;
            }
            $scope.verMovimento = function(moveId){
                Pokemons.getMove(moveId).then(function(move){
                    $scope.movimento = move;
                },function(){
                    $scope.movimento = null;
                })
            }
        }
})();
