(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['items'];
function CategoriesController(items) {
  var mainList = this;
  mainList.items = items;

  console.log(mainList.items);
}

})();
