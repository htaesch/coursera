(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service=this;
/*  service.removeItem = function (itemIndex) {
    service.foundItems.splice(itemIndex, 1);
  };
*/

  service.getAllCategories = function () {
    return $http({
      method : "GET",
      url : "https://davids-restaurant.herokuapp.com/categories.json"
      })
      .then(function (result) {
        return result.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method : "GET",
      url : " https://davids-restaurant.herokuapp.com/menu_items.json?category=" +  categoryShortName
      })
      .then(function (result) {
        console.log(result.data)
        return result.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }


};

})();
