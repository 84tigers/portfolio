"use strict";


angular.module("App", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
        .when("/", {
            template: "<home></home>"
        })
        // .when("/contact", {
        //     template: "<contact></contact>"
        // })
        .otherwise("/", {
            template: "<home></home>"
        });
    }]);