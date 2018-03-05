var angularApp = angular.module('angularApp',['ui.router']);

angularApp.constant('Config', {"backendURL":"http://localhost:8090/rest.examen"});

angularApp.config(function($stateProvider){
    $stateProvider.state('envio-list',{
        url:'/envio',
        templateUrl:'../partials/lista-envio.html',
        controller:'EnvioListCtrl'
    });
    $stateProvider.state('envio-view',{
       url:'/envio/:id/ver',
       templateUrl:'../partials/ver-envio.html',
       controller:'EnvioViewCtrl'
    }).state('envio-new',{
        url:'/envio/nuevo',
        templateUrl:'../partials/nuevo-envio.html',
        controller:'EnvioNuevoCtrl'
    }).state('envio-edit',{
        url:'/envio/:id/editar',
        templateUrl:'../partials/editar-envio.html',
        controller:'EnvioEditCtrl'
    });
}).run(function($state){
   $state.go('envio-list');
});