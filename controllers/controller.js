(function() {
        'use strict';

        // Save all inventory data in an array:
        angular
            .module('shopular')
            .controller('StockController', function StockController(storage) {

                // Calculates Tax
                let vm = this;
                vm.tax = 1.065;

                // Pushes User Info Onto Object On Submit
                vm.submit = function(newItem) {
                    vm.form = {};
                    vm.items = storage.addData(newItem);
                }

                vm.items =  storage.getData();

            });
})();