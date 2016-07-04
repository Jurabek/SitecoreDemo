angular.module('app').factory('contentSearchService',
    function ($http) {
        return {
            textPages: function (lang, keyword, page) {
                return $http.post('/textdata-result/GetTextPages',
                    {
                        'lang': lang,
                        'keyword': keyword,
                        'page': page
                    }
                );
            },

            lang: function () {
                var domElement = document.querySelector('body');
                var $domElement;
                if (domElement) {
                    var $domElement = angular.element(domElement);
                    return $domElement.attr('data-current-language');
                }
            },

            searchResultsUrl: function () {
                var domElement = document.querySelector('body');
                var $domElement;
                if (domElement) {
                    var $domElement = angular.element(domElement);
                    return $domElement.attr('data-search-results-item-url');
                }
            },
        };
    });