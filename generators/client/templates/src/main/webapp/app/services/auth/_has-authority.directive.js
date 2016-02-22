(function() {
    'use strict';

    angular.module('<%=angularAppName%>')
        .directive('hasAuthority', ['Principal', function (Principal) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var authority = attrs.hasAuthority.replace(/\s+/g, '');

                    var setVisible = function () {
                            element.removeClass('hidden');
                        },
                        setHidden = function () {
                            element.addClass('hidden');
                        },
                        defineVisibility = function (reset) {

                            if (reset) {
                                setVisible();
                            }

                            Principal.hasAuthority(authority)
                                .then(function (result) {
                                    if (result) {
                                        setVisible();
                                    } else {
                                        setHidden();
                                    }
                                });
                        };

                    if (authority.length > 0) {
                        defineVisibility(true);

                        scope.$watch(function() {
                            return Principal.isAuthenticated();
                        }, function() {
                            defineVisibility(true);
                        });
                    }
                }
            };
        }]);
})();
