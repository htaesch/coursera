(function  () {

  'use strict';

  angular.module('ShoppingListCheckOff', [])
      .controller('ToBuyShoppingController', ToBuyShoppingController)
      .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
      .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var buyCtrl = this;
    buyCtrl.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

    buyCtrl.buyItem = function (index) {
      ShoppingListCheckOffService.buyItem(index);
    }
  };

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var boughtCtrl = this;
    boughtCtrl.itemsBought = ShoppingListCheckOffService.getItemsBought();
  }

function ShoppingListCheckOffService() {
  var service=this;

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
  }

  service.getItemsBought = function () {
    return itemsBought;
  }

  service.buyItem = function (index) {
    var itemBought = itemsToBuy.splice(index, 1)[0];
    itemsBought.push(itemBought);
  }
};

})();
