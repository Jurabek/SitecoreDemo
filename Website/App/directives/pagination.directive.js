var paginationDirectiveApp = angular.module('paginationDirectiveApp', []);

angular.module('paginationDirectiveApp').directive('pagination',
    function ($templateCache) {
        return {
            scope: {
                totalItems: "@",
                itemsPerPage: "@",
                currentPage: "=",
                preceedingPages: "@",
                followingPages: "@",
                changePageFunction: "&"
            },
            restrict: 'E',
            replace: true,
            template: $templateCache.get('pagination.template.html'),
            compile:
                function (tElement, tAttrs, transclude) {
                    return function (scope, elem, attrs) {
                        scope.changePage = function (page) {
                            if (page < 1) page = 1;
                            if (page > scope.pageCount) page = scope.pageCount;

                            scope.changePageFunction(page);
                        }

                        scope.isActive = function (number) {
                            var currentPage = Number(scope.currentPage);
                            return currentPage == number ? "active" : "";
                        }

                        scope.count = function () {
                            var currentPage = Number(scope.currentPage);
                            var preceedingPages = Number(scope.preceedingPages);
                            var followingPages = Number(scope.followingPages);
                            var totalItems = Number(scope.totalItems);
                            var itemsPerPage = Number(scope.itemsPerPage);
                            var pages = [];

                            scope.pageCount = (totalItems % itemsPerPage !== 0) ? parseInt(totalItems / itemsPerPage + 1) : parseInt(totalItems / itemsPerPage);
                            scope.hasPrevious = (currentPage - preceedingPages) >= 1;
                            scope.hasNext = (currentPage + followingPages) <= scope.pageCount;

                            var start = currentPage - preceedingPages;
                            start = start < 1 ? 1 : start;

                            var end = currentPage + followingPages;
                            end = end > scope.pageCount ? scope.pageCount : end;

                            for (var i = start; i <= end; i++) {
                                pages.push(i);
                            }

                            return pages;
                        }
                    }
                }
        }
    });