app.controller('menuController',
    function($scope){
        $scope.model = {title: 'Our Menu', mainDish: {}};
        $scope.state = null;

        $scope.changeMainDish = function (item,price) {
            $scope.model.mainDish.name = item;
            $scope.model.mainDish.price = price;
            /*console.log($scope.model);*/
        }

        $scope.changeState = function(){
            $scope.state = true;
            console.log($scope.state);
        }

        //sirve para detectar cambios sobre una variable del modelo
        $scope.$watch('model.mainDish', function (newValue, oldValue) {
            if (newValue === 'BBQ Chicken Pizza') {
                alert('You have selected the BBQ Chicken Pizza!');
            }
        });
    }
);