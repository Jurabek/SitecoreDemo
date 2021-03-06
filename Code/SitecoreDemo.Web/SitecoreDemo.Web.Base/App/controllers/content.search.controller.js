﻿angular.module('app').controller('ContentSearchController',
    function ($scope, contentSearchService) {
        $scope.searchResultsUrl = contentSearchService.searchResultsUrl();
        $scope.searchClick = function () {
            window.location.href = $scope.searchResultsUrl + '?q=' + encodeURIComponent($scope.keyword);
        };
    });