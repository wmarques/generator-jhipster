(function() {
    'use strict';

    angular
        .module('<%=angularAppName%>')
        .factory('StorageService', function ($window) {
            return {

                get: function (key) {
                    return JSON.parse($window.localStorage.getItem(key));
                },

                save: function (key, data) {
                    $window.localStorage.setItem(key, JSON.stringify(data));
                },

                remove: function (key) {
                    $window.localStorage.removeItem(key);
                },

                clearAll : function () {
                    $window.localStorage.clear();
                }
            };
        });
})();
