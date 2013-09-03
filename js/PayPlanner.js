var payPlannerAppModule = angular.module('PayPlannerApp', []);

/* Models */

var paymentData = {

    creditAmount: 0, // Monto del Credito
    timeLimit: 0, // Plazo
    feesNumber: 0, // Numero de cuotas
    disbursementDate: new Date(), // Fecha de Desembolso
    fixedRatePeriod: 0, // Periodo Tasa Fija
    fixedRate: 0, // Tasa Fija
    referenceRate: 0, // Tasa de Referencia (TRe)
    spread: 0, // Spread - Propagar ?
    periodVariableRate: 0, // Tasa Periodo Variable 
    lapseBetweenFees: 0, // Lapso Entre Cuotas
    gracePeriod: 0, // Período de Gracia
    formCost: 0, // Costo del Formulario
    desgravamenInsurance: 0, // Seguro de Desgravamen

    calculate: function() {
        console.log('** Calculate Values **');
        this.feesNumber = this.timeLimit * (360 / this.lapseBetweenFees);
        this.periodVariableRate = this.spread + this.referenceRate  ;
    }
};


/* Controllers */
payPlannerAppModule.controller('PaymentsController', function($scope) {

    $scope.pay = paymentData;

    $scope.calculatePayments = function() {
        console.log('calculamos los pagos');
        paymentData.calculate();
    };



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