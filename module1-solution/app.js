(function  () {

  'use strict';

  angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.checkTooMuch = function () {
      if ($scope.dishes == "") {
        $scope.resultMessage = "Please enter data first";
      } else {
        var length = $scope.dishes.split(',').length;
        if (length < 4) {
          $scope.resultMessage = "Enjoy!";
        } else {
          $scope.resultMessage = "Too much!";
        }
      }
    }
  }
})();
