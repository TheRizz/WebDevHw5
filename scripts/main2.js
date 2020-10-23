(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form2"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler2 = App.FormHandler2;
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;
    var formHandler2 = new FormHandler2(FORM_SELECTOR);

    formHandler2.addSubmitHandler(function (data) {
        myTruck.createOrder.call(myTruck, data);
    });

})(window);