(function(){
    var app = angular.module('pokedex',[
        'pokedex.controllers',
        'pokedex.services',
        'ui.bootstrap',
        'ui.router'
    ]);

    app.config(RouterConfiguration);

    RouterConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RouterConfiguration($stateProvider, $urlRouterProvider){
         $stateProvider.state('pokemons', {
            url: "/pokemons",
            templateUrl: "templates/pokemons.html",
            controller: 'PokemonsController'
        });

         $stateProvider.state('pokemon', {
            url: "/pokemon/:id",
            views: {
                '' :{
                    templateUrl: "templates/pokemon.html",
                    controller: 'PokemonDetailController'
                },
                'evo@pokemon':{
                    templateUrl: "templates/evo.html"
                },
                'moves@pokemon':{
                    templateUrl: "templates/moves.html",
                    controller: 'MovesController'
                }
            }
        });

         $urlRouterProvider.otherwise("/pokemons");
    }

})();
