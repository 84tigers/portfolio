"use strict";

const contact = {
    templateUrl: "app/components/contact/contact.html",
    controller: ["Service", function (Service) {
        const vm = this;

    }]
};


angular.module("App")
    .component("contact", contact);