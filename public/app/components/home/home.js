"use strict";

const home = {
    templateUrl: "app/components/home/home.html",
    controller: ["Service", function (Service) {
        const vm = this;
        vm.loaded = false;
        vm.logoTxt = true;
        vm.landAnim = true;

        vm.loadHome = () => {
            console.log("clicked");
            if (vm.logoTxt === true) {
                vm.landAnim = false;
                vm.logoTxt = false;
            } else {
                vm.logoTxt = true;
            }
        };

    }]

};


angular.module("App")
    .component("home", home);