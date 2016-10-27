(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  var $ctrl = this;
  $ctrl.validFavorite = false;
  $ctrl.infoSaved = false;
  $ctrl.user = SignupService.getUser();

  $ctrl.checkFavorite = function() {
    SignupService.checkFavorite($ctrl.user.favorite).then(function(response) {
      $ctrl.user.favoriteItem = response;
      $ctrl.validFavorite = true;
    }, function() {
      $ctrl.validFavorite = false;
    });
  }

  $ctrl.submit = function () {
    SignupService.setUser($ctrl.user);
    $ctrl.infoSaved = true;
  }
}

})();
