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
/*      console.log(narrowCtrl.found);*/
    }
  }


  narrowCtrl.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };



  };


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service=this;
 /* service.foundItems = [];*/

  /*

  var itemsToBuy = [
    { 
      name : 'cookies',
      quantity : '10'
    },
    { 
      name : 'bananas',
      quantity : '4'
    },
    { 
      name : 'apples',
      quantity : '7'
    },
    { 
      name : 'strawberries',
      quantity : '100'
    },
    { 
      name : 'apricots',
      quantity : '5'
    }
  ];
  var itemsBought = [];

  service.getItemsToBuy = function () {
    return itemsToBuy;
  }*/

  service.removeItem = function (itemIndex) {
    service.foundItems.splice(itemIndex, 1);
  };


  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method : "GET",
      url : "https://davids-restaurant.herokuapp.com/menu_items.json"
      })
      .then(function (result) {
        /*var foundItems = result.data.menu_items;*/
        /*console.log(foundItems);*/
        service.foundItems = [];

    for (var i = 0; i < result.data.menu_items.length; i++) {
      var description = result.data.menu_items[i].description;
      if (description.toLowerCase().indexOf(searchTerm) !== -1) {


service.foundItems.push(result.data.menu_items[i]);
        
    
      }
    }
/*console.log(service.foundItems);
console.log(service.foundItems[5]);*/
    return service.foundItems;







      })
      .catch(function (error) {
        console.log(error);
    });
  }



/*  service.getItemsBought = function () {
    return itemsBought;
  }

  service.buyItem = function (index) {
    var itemBought = itemsToBuy.splice(index, 1)[0];
    itemsBought.push(itemBought);
  }*/
};

})();
