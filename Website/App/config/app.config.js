﻿// $location service configuration
angular.module('app').config(
    function ($locationProvider) {
        $locationProvider.html5Mode({ enabled: true, requireBase: false });
    });