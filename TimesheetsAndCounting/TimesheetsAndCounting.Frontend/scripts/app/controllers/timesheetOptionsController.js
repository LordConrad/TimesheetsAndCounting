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

            this.getInput = function() {
                return $scope.editDialog.input;
            }

            $scope.dismiss = this.dismiss;

            $scope.submit = function() {
                update().then(function() {
                    $scope.dismiss();
                });
            }

        }
    ]);
})();