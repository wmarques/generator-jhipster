(function() {
  'use strict';

  angular.module('<%=angularAppName%>')
      .directive('jhAlert', function(AlertService) {
          return {
              restrict: 'E',
              template: '<div class="alerts" ng-cloak="">' +
                              '<div ng-repeat="alert in alerts" ng-class="[alert.position, {\'toast\': alert.toast}]">' +
                                  '<uib-alert ng-cloak="" type="{{alert.type}}" close="alert.close()"><pre>{{ alert.msg }}</pre></uib-alert>' +
                              '</div>' +
                        '</div>',
              controller: ['$scope',
                  function($scope) {
                      $scope.alerts = AlertService.get();
                      $scope.$on('$destroy', function () {
                          $scope.alerts = [];
                      });
                  }
              ]
          };
      });

})();
