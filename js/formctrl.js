angular.module("app")
    .controller("formController", formController);



function formController($scope) {
    var vm = this;

    vm.list = ["grocery shop", "laundry", "get gas", "vacuum"];

    vm.add = function(todo) {
        vm.list.push(todo);
        $scope.newTodo = "";
    }

    vm.remove = function(todo) {
        var index = vm.list.indexOf(todo);
        vm.list.splice(index, 1);
    }
}