function svc() {
    var todos = [];

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