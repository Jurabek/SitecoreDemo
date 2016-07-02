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
                var domElement = document.querySelector('#current-language');
                var $domElement;
                if (domElement) {
                    var $domElement = angular.element(domElement);
                   return $domElement.val();
                }
            },

            searchResultsUrl: function () {
                var domElement = document.querySelector('#search-results-item-url');
                var $domElement;
                if (domElement) {
                    var $domElement = angular.element(domElement);
                    return $domElement.val();
                }
            },
        };
    });