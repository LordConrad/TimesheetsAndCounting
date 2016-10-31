(function () {
    angular.module('app.controllers').controller('navigationController', ['$scope', '$timeout', '$mdSidenav', '$timeout', '$http', '$mdEditDialog',
        function ($scope, $timeout, $mdSidenav, $timeout, $http, $mdEditDialog) {
            $scope.toggleLeft = buildToggler('left');
            $scope.toggleRight = buildToggler('right');

            function buildToggler(componentId) {
                return function () {
                    $mdSidenav(componentId).toggle();
                };
            }
            
            

            

            $scope.promise = $timeout(function () {
                $http.get('timesheet.json').then(function (timesheets) {
                    $scope.timesheets = timesheets.data;
                });
            }, 2000);

            $scope.getTimesheets = function() {

            };

            $scope.editTimesheet = function(event, person) {
                var promise = $mdEditDialog.show({
                    targetEvent: event,
                    modelValue: person.day3,
                    save: function(input) {
                        person.day3 = input.$modelValue;
                    }
                });

                promise.then(function(ctrl) {
                    var input = ctrl.getInput();

                    input.$viewChangeListeners.push(function() {
                        input.$setValidity('test', input.$modelValue !== 'test');
                    });
                });
            };
        }]);
})();