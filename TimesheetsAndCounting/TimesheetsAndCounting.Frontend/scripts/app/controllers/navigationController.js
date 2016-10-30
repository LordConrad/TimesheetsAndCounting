(function () {
    angular.module('app.controllers').controller('navigationController', ['$scope', '$timeout', '$mdSidenav', '$timeout', '$http',
        function ($scope, $timeout, $mdSidenav, $timeout, $http) {
            $scope.toggleLeft = buildToggler('left');
            $scope.toggleRight = buildToggler('right');

            function buildToggler(componentId) {
                return function () {
                    $mdSidenav(componentId).toggle();
                };
            }
            
            

            

            $scope.promise = $timeout(function () {
                $http.get('scripts/app/controllers/timesheet.json').then(function (timesheets) {
                    $scope.timesheets = timesheets.data;
                });
            }, 2000);

            $scope.getTimesheets = function() {
                
            }
        }]);
})();