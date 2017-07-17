app.controller('pizzaController', [
    '$scope',
    function ($scope) {
        $scope.success = false;
        $scope.model = { 
            title: 'Pizza Builder',
            availableToppings: ['Cheese', 'Pepperoni', 
                'Bacon', 'Pineapple', 
                'Sausage', 'Ham', 
                'Chicken', 'Mushrooms', 
                'Onion', 'Olives', 'Green Peppers'
            ],
            toppings: []
        };

        $scope.dismissMessage = function(){
            $scope.success = false;
        }

        $scope.addTopping = function (topping){
            $scope.model.toppings.push(topping);
            $scope.model.search = null;
            $scope.success = true;
        }
    }
]);