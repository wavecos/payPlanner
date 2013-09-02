var payPlannerAppModule = angular.module('PayPlannerApp', []);

/* Models */

/* Controllers */
payPlannerAppModule.controller('PaymentsController', function($scope) {

    $scope.fixedFee = {name: "alfredp", test: "prueba"};


});

/* Routes */
payPlannerAppModule.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            controller: 'PaymentsController',
            templateUrl: 'partials/payments.html'
        }).
        otherwise({
            redirectTo: '/'});
});