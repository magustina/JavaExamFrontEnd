'use strict'
angularApp
.controller('EnvioListCtrl', ['$scope', '$http', 'envioService', '$state', '$window', 
function($scope, $http, envioService, $state, $window){
    $scope.envio = {};

    $scope.obtenerEnvios = function(){
        envioService.obtenerEnvios()
        .success(function (x){
            $scope.listaEnvios = x;
            console.log(x);
        })
        .error(function(data){
            console.log(data);
        });
    };

    $scope.obtenerEnvios();


}])

.controller('EnvioViewCtrl', function($scope, $stateParams, envioService){
    $scope.getById = function() {
        envioService.getById($stateParams.id)
        .success(function(x){
            $scope.viewEnvios = x;
            console.log(x);  
        })
        .error(function(data){
            console.log(data);
        });
        
    };
    $scope.getById($stateParams.id);
})

.controller('EnvioNuevoCtrl', function($scope, $state, $stateParams, envioService){

    $scope.envio = {};

    $scope.obtenerEnvios = function(){
        envioService.obtenerEnvios()
        .success(function (x){
            $scope.listaEnvios = x;
            console.log(x);
        })
        .error(function(data){
            console.log(data);
        });
    };

    $scope.obtenerPaises = function(){
        envioService.obtenerPaises()
        .success(function (x){
            $scope.listaPaises = x;
            console.log(x);
        })
        .error(function(data){
            console.log(data);
        });
    };

    $scope.obtenerPaises();

    $scope.obtenerOficinas = function(){
        envioService.obtenerOficinas()
        .success(function (x){
            $scope.listaOficina = x;
            console.log(x);
        })
        .error(function(data){
            console.log(data);
        });
    };

    $scope.obtenerOficinas();

    $scope.obtenerTipoEnvio = function(){
        envioService.obtenerTipoEnvio()
        .success(function (x){
            $scope.listaTipoEnvio = x;
            console.log(x);
        })
        .error(function(data){
            console.log(data);
        });
    };

    $scope.obtenerTipoEnvio();

    $scope.crearEnvio = function (){
        console.log('Comienza la entrada: ***********************');
        console.log($scope.envio);
        console.log('Termina la entrada: ***********************');
        if(!$.isEmptyObject($scope.envio)){
            envioService.crearEnvio($scope.envio)
            .success(function(x){
                $scope.envio = {};
                $scope.obtenerEnvios();
                console.log(x);
                $state.go('envio-list');
            })
            .error(function(data){
                console.log(data);
            });
        }
    };
})

.controller('EnvioEditCtrl', function($scope, $state, $stateParams, envioService){

    $scope.obtenerEnvios = function(){
        envioService.obtenerEnvios()
        .success(function (x){
            $scope.listaEnvios = x;
            console.log(x);
        })
        .error(function(data){
            console.log(data);
        });
    };
    
    $scope.obtenerPaises = function(){
        envioService.obtenerPaises()
        .success(function (x){
            $scope.listaPaises = x;
            console.log(x);
        })
        .error(function(data){
            console.log(data);
        });
    };

    $scope.obtenerPaises();

    $scope.obtenerOficinas = function(){
        envioService.obtenerOficinas()
        .success(function (x){
            $scope.listaOficina = x;
            console.log(x);
        })
        .error(function(data){
            console.log(data);
        });
    };

    $scope.obtenerOficinas();
    
    
    $scope.getById = function() {
        envioService.getById($stateParams.id)
        .success(function(x){
            $scope.envio = x;
            console.log(x);  
        })
        .error(function(data){
            console.log(data);
        });
        
    };

    $scope.getById($stateParams.id);

    $scope.obtenerTipoEnvio = function(){
        // console.log(TipoExpedDtosService);
        envioService.obtenerTipoEnvio()
        .success(function (x){
            $scope.listaTiposEnvio = x;
            console.log(x);
        })
        .error(function(data){
            console.log(data);
        });
    };

    $scope.modificarEnvio = function() {
        console.log($scope.envio);
         if(!$.isEmptyObject($scope.envio)){
            envioService.modificarEnvio($scope.envio, $stateParams.id)
            .success(function(x){
                $scope.envio = {};
                $scope.obtenerEnvios();
                console.log(x);
                $state.go('envio-list');
            })
            .error(function(data){
                console.log(data);
            });
        }
    };
});