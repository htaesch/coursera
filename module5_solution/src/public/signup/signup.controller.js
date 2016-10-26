(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  var $ctrl = this;
  $ctrl.validFavorite = false;
  $ctrl.infoSaved = false;

  console.log("truc");

  $ctrl.checkFavorite = function() {
    console.log("fdd");
    SignupService.checkFavorite($ctrl.user.favorite).then(function(response) {
      console.log(response);
      $ctrl.user.favoriteItem = response;
      $ctrl.validFavorite = true;
    }, function() {
      console.log("error");
      $ctrl.validFavorite = false;
    });
  }

  $ctrl.getUser = function() {
    console.log("check favo");
    return SignupService.getUser();
  }


  $ctrl.submit = function () {
    console.log($ctrl.user);
    SignupService.setUser($ctrl.user);
    $ctrl.infoSaved = true;
  }
}


})();
