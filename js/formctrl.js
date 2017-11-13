function formController($scope, svc) {
    var vm = this;

    vm.list = ["grocery shop", "laundry", "get gas", "vacuum"];

    vm.add = function(todo) {
        vm.list.push(todo);
        $scope.newTodo = "";
        svc.setData(vm.list);
        vm.list = svc.getData();
    }
}

angular.module("app")
    .controller("formController", formController);