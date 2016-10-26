(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);


SignupService.$inject = ['$http', 'ApiPath'];
function SignupService($http, ApiPath) {
  var service = this;


  service.checkFavorite = function (favorite) {
    console.log("machin");
    return $http.get(ApiPath + '/menu_items/' + favorite + '.json').then(function (response) {
      console.log("favorite : " + favorite);
      // service.user.favoriteItem = response.data;
        return response.data;
      });

  }

  // service.getFavoriteItem = function () {
  //   return service.user.favoriteItem;
  // }

  service.setUser = function (user) {
      service.user = user;
  };

  service.getUser = function () {
    return service.user;
  }

  //
  // service.getMenuItems = function (category) {
  //   var config = {};
  //   if (category) {
  //     config.params = {'category': category};
  //   }
  //
  //   return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
  //     return response.data;
  //   });
  // };

}



})();
