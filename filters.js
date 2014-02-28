"use script";

// Dynamically apply a value if a condition is met, apply another value otherwise.
angular.module("sample.filters", []).filter("conditional", function() {
    return function(condition, truthy, falsy) {
        return condition ? truthy : falsy;
    };
});