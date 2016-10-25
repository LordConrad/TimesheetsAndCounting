(function () {
    angular.module('app.controllers').controller('navigationController', ['$scope', '$timeout', '$mdSidenav',
        function ($scope, $timeout, $mdSidenav) {
            $scope.toggleLeft = buildToggler('left');
            $scope.toggleRight = buildToggler('right');

            function buildToggler(componentId) {
                return function () {
                    $mdSidenav(componentId).toggle();
                };
            }
            
            $scope.filteredItems = [{
                name: 'Шурпак А.Ф.',
                day1: 8,
                day2: 8,
                day3: 8,
                day4: 8,
                day5: 8,
                day6: 8,
                day7: 8,
            }, {
                name: 'Волошин В.В.',
                day1: 8,
                day2: 8,
                day3: 8,
                day4: 8,
                day5: 8,
                day6: 8,
                day7: 8,
            }];
        }]);
})();