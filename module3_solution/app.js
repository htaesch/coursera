(function  () {

  'use strict';

  angular.module('NarrowItDownApp', [])
      .controller('NarrowItDownController', NarrowItDownController)
      .service('MenuSearchService', MenuSearchService);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowCtrl = this;
/*    buyCtrl.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

    buyCtrl.buyItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
    }*/

    var found = MenuSearchService.getMatchedMenuItems("truc");

console.log("go:" + MenuSearchService.getMatchedMenuItems("truc"));



  };


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service=this;

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


  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method : "GET",
      url : "https://davids-restaurant.herokuapp.com/menu_items.json"
      })
      .then(function (result) {
        var foundItems = result.data;
        console.log(foundItems);
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
