function svc() {
    var todos = ["grocery shop", "laundry", "get gas", "vacuum"];

    return {
        setData: function(todoList) {
            todos = todoList;
        },
        getData: function() {
            return todos;
        }
    }
}

angular.module("app")
    .factory("svc", svc);