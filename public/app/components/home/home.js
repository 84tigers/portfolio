"use strict";

const home = {
    templateUrl: "app/components/home/home.html",
    controller: ["Service", function (Service) {
        const vm = this;
        vm.loaded = false;
        vm.logoTxt = true;

    }]

};


angular.module("App")
    .component("home", home);