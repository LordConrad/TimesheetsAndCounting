(function() {
    angular.module('app.controllers', ['$element', '$q', 'save', '$scope',
        function($element, $q, save, $scope) {

            function update() {
                if ($scope.editDialog.$invalid) {
                    return $q.reject();
                }
                if (angular.isFunction(save)) {
                    return $q.when(save($scope.editDialog.input));
                }
                return $q.resolve();
            }

            this.dismiss = function() {
                $element.remove();
            };

        }
    ]);
})();