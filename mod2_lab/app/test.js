//hay que lanzarlo despues que se carga todo el contenido porque sino da undefined
document.addEventListener('DOMContentLoaded', function () {
    //cuando no esta instalado el jquery junto con angular hay que hacer un querySelector
    //si esta instalador el jquery antes que angular la propiedad element funciona 
    //como un $("#")
    /*var element = document.querySelector("body");
    console.log(element);
    
    var scope = angular.element("body");
    console.log(scope);
    */
    var ngModel, 
        mfcFlowData, 
        $timeout, 
        $rootScope, 
        $state, 
        $injector;

    //tomo el scope completo
    var scope = angular.element("body").scope();
    
    $injector = angular.element("body").injector();
    /*$state = $injector.get('$state');
    $rootScope = $injector.get("$rootScope");
    $timeout = $injector.get("$timeout");
    mfcFlowData = $injector.get("mfcFlowData");*/

    console.log(scope);
    //console.log($injector);

    //pongo un watcher sobre la variable del modelo que deseo
    //detectar cuando cambie
    scope.$watch('state', function(newValue, oldValue){
        console.log(newValue);
        console.log(oldValue);
        /*if (newValue === 'BBQ Chicken Pizza') {
            alert('You have selected the BBQ Chicken Pizza!');
        }*/
    });
});