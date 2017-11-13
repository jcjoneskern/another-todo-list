var taskList = {
    bindings: {
        list: "<",
        todos: "@"
    },
    templateUrl: "templates/tasklist.html",
    controller: function() {
        var vm = this;

        vm.remove = function(todo) {
            var index = vm.list.indexOf(todo);
            vm.list.splice(index, 1);
        }
    }
}

angular.module("app")
    .component("taskList", taskList);