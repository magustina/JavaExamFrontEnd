'use strict'
angularApp
.factory('envioService',['$http','Config', function($http, Config){
    return{
        
        obtenerEnvios : function(){
            return $http.get(Config.backendURL + '/envio/');
        },
        crearEnvio : function(envio){
            return $http.post(Config.backendURL + '/envio/', envio);
        },
        modificarEnvio : function(envio, id){
            return $http.put(Config.backendURL + '/envio/' + id, envio);
        },
        getById : function(id){
            return $http.get(Config.backendURL + '/envio/' + id);
        },
        obtenerPaises : function(){
            return $http.get(Config.backendURL + '/pais/');
        },
        obtenerOficinas : function(){
            return $http.get(Config.backendURL + '/oficina/');
        },
        obtenerTipoEnvio : function(){
            return $http.get(Config.backendURL + '/TipoEnvio/');
        }
    };
}]);