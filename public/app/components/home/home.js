"use strict";

const home = {
    templateUrl: "app/components/home/home.html",
    controller: ["Service", function (Service) {
        const vm = this;
        vm.loaded = false;
        vm.logoTxt = true;
        vm.loadAnim = false;

        vm.loadHome = () => {
            console.log("clicked");
            vm.loadAnim = true;
            if (vm.logoTxt === true)
                vm.logoTxt = false;
            else
                vm.logoTxt = true;
        };

    }]

};


angular.module("App")
    .component("home", home);