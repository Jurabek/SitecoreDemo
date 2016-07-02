var app = angular.module('app', ['paginationDirectiveApp']);
// $location service configuration
app.config(function ($locationProvider) {
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
});