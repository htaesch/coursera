(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['SignupService','ApiPath'];
function MyinfoController(SignupService, ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;

  $ctrl.getUser = function() {
    $ctrl.user = SignupService.getUser();
    return $ctrl.user;
  }

  $ctrl.submit = function () {
    SignupService.setUser($ctrl.user);
    $ctrl.infoSaved = true;
  }
}


})();
