(function(){
    var app = angular.module('pokedex',[
        'pokedex.controllers',
        'pokedex.services',
        'pokedex.directives',
        'ui.bootstrap',
        'ui.router'
    ]);

    app.config(RouterConfiguration);

    RouterConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouterConfiguration($stateProvider, $urlRouterProvider){
         $stateProvider.state('pokemons', {
            url: "/pokemons",
            templateUrl: "src/templates/pokemons.html",
            controller: 'PokemonsController'
        });

         $stateProvider.state('pokemon', {
            url: "/pokemon/:id",
            views: {
                '' :{
                    templateUrl: "src/templates/pokemon.html",
                    controller: 'PokemonDetailController'
                },
                'evo@pokemon':{
                    templateUrl: "src/templates/evo.html"
                },
                'moves@pokemon':{
                    templateUrl: "src/templates/moves.html",
                    controller: 'MovesController'
                }
            }
        });

         $urlRouterProvider.otherwise("/pokemons");
    }

})();
