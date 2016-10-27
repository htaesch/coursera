(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);

SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var service = this;

  service.checkFavorite = function (favorite) {
    return $http.get(ApiPath + '/menu_items/' + favorite + '.json').then(function (response) {
        return response.data;
      });
  }

  service.setUser = function (user) {
      service.user = user;
  };

  service.getUser = function () {
    return angular.copy(service.user);
  }
}
})();
