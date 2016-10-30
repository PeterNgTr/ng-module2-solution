(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])

        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;

        toBuyList.itemName = "";
        toBuyList.itemQuantity = "";

        toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

        toBuyList.addToBoughtLists = function (itemIndex) {
            ShoppingListCheckOffService.addToBoughtList(itemIndex);
        }

        toBuyList.showInfoMessage = function (list) {
            return ShoppingListCheckOffService.checkEmptyList(list);
        }

    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;

        boughtList.itemName = "";
        boughtList.itemQuantity = "";

        boughtList.items = ShoppingListCheckOffService.getBoughtItems();

        boughtList.showInfoMessage = function (list) {
            return ShoppingListCheckOffService.checkEmptyList(list);
        }
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [{
            name: 'Macbook Pro 15 inch',
            quantity: 10
        }, {
            name: 'Macbook Pro 13 inch',
            quantity: 10
        }, {
            name: 'iPhone 7 plus',
            quantity: 10
        }, {
            name: 'iMac 22 inch',
            quantity: 10
        }, {
            name: 'Macbook 12 inch',
            quantity: 10
        }];

        var boughtItems = [];

        service.addToBoughtList = function (itemIndex) {
            var item = toBuyItems[itemIndex];
            toBuyItems.splice(itemIndex, 1);
            boughtItems.push(item);
        };

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };

        service.checkEmptyList = function (list) {
            return list.length == 0;
        }
    }

})();
