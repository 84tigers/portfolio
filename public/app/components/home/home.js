"use strict";

const home = {
    templateUrl: "app/components/home/home.html",
    controller: ["Service", function (Service) {
        const vm = this;
        var myPath = document.getElementById("path1");
var length = myPath.SVGPathElement.getTotalLength();
console.log(length);

    }]

};


angular.module("App")
    .component("home", home);