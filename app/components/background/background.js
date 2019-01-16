"use strict";

const background = {
    templateUrl: "app/components/background/background.html",
    controller: ["Service", function (Service) {
        const vm = this;
 
    }]
};


angular.module("App")
    .component("background", background);