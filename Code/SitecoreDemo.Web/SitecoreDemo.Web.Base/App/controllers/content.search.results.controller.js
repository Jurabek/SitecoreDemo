angular.module('app').controller('ContentSearchResultsController',
    function ($scope, $location, contentSearchService) {

        $scope.$watch(function () {
            return ($location.search() || {}).q;
        }, function (keyword) {
            $scope.keyword = keyword;
            $scope.lang = contentSearchService.lang();
            $scope.getTextPages($scope.lang, $scope.keyword, 1);
        });

        $scope.getTextPages = function (lang, keyword, page) {
            contentSearchService.textPages(lang, keyword, page)
                .then(function (response) {
                    $scope.loaded = true;
                    $scope.textPages = response.data.textPages;
                    $scope.itemsTotal = response.data.itemsTotal;
                    $scope.pagesTotal = response.data.pagesTotal;
                    $scope.currentPage = page;
                }, function errorCallback(response) {

                });
        };

        $scope.changePage = function (page) {
            if (page < 1) {
                page = 1;
            }

            if (page > $scope.pagesTotal) {
                page = $scope.pagesTotal;
            }

            $scope.currentPage = page;
            $scope.getTextPages($scope.lang, $scope.keyword, $scope.currentPage);
        }
    });