function formController($scope) {
    var vm = this;

    vm.list = ["grocery shop", "laundry", "get gas", "vacuum"];

    vm.add = function(todo) {
        vm.list.push(todo);
        $scope.newTodo = "";
    }
}

angular.module("app")
    .controller("formController", formController);