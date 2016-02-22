(function() {
    'use strict';

    angular
        .module('<%=angularAppName%>')
        .directive('jhSortBy', function () {
            return {
                restrict: 'A',
                scope: false,
                require: '^jhSort',
                link: function (scope, element, attrs, parentCtrl) {
                    element.bind('click', function () {
                        parentCtrl.sort(attrs.jhSortBy);
                        parentCtrl.applyClass(element);
                    });
                }
            };
        });
})();
