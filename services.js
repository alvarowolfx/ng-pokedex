(function(){
    angular.module('pokedex.services',[])
        .factory('Pokemons',Pokemons)
        .constant('PokeapiURL','http://pokeapi.co/api/v1/');


    Pokemons.$inject = ['$http', '$q', 'PokeapiURL'];
    function Pokemons($http, $q, PokeapiURL){
        var service = {
            getAll: getAll
        }

        return service;

        function getAll(){
            var defered = $q.defer();
            var url = PokeapiURL + 'pokedex/1/';
            $http.get(url).success(function(response){
                defered.resolve(response.pokemon);
            }).error(function(){
                defered.reject([]);
            });
            return defered.promise;
        }

    };
})();
