function hoverState() {
    return {
    restrict: "A",
    link: function ($scope, $element, $attrs) {
        $element.on("mouseover", function () {
            $element.css("color", "#c5c5c5");
        });
        $element.on("mouseleave", function () {
            $element.css("color", "#000");
        });
    }
    }
}

angular.module("app")
    .directive("hoverState", hoverState);