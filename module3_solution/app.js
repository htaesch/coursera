(function  () {

  'use strict';

  angular.module('NarrowItDownApp', [])
      .controller('NarrowItDownController', NarrowItDownController)
      .service('MenuSearchService', MenuSearchService)
      .directive('foundItemsDir', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItemsDir.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController() {
  var foundItems = this;

  foundItems.nothingFound = function() {
    if (foundItems.items && !foundItems.items.length) {
      return true;
    }
    return false;
  }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowCtrl = this;
  narrowCtrl.searchTerm = function () {
    narrowCtrl.found = [];
    if (narrowCtrl.search) {
      MenuSearchService.getMatchedMenuItems(narrowCtrl.search).then(function(result) {
        narrowCtrl.found = result;
      });
    }
  }


  narrowCtrl.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };
};

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service=this;
  service.removeItem = function (itemIndex) {
    service.foundItems.splice(itemIndex, 1);
  };


  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method : "GET",
      url : "https://davids-restaurant.herokuapp.com/menu_items.json"
      })
      .then(function (result) {
        service.foundItems = [];
        for (var i = 0; i < result.data.menu_items.length; i++) {
          var description = result.data.menu_items[i].description;
          if (description.toLowerCase().indexOf(searchTerm) !== -1) {
            service.foundItems.push(result.data.menu_items[i]);
          }
        }
        return service.foundItems;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};

})();
