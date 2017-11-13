var taskForm = {
    controller: "formController",
    templateUrl: "templates/formtemplate.html" 
}

angular.module("app")
    .component("taskForm", taskForm);