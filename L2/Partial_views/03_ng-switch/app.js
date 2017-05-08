var app = angular.module('SampleApp', []);

app.controller('SampleAppCtrl', function ($scope) {
    $scope.items = [{name: 'Item 1', value: '10'},
        {name: 'Item 2', value: '2'},
        {name: 'Item 3', value: '31'}];

    $scope.options = [{display: 'Table', value: 'table'},
            {display: 'List', value: 'list'},
            {display: 'List with markers', value: 'budges'}];

    $scope.mode = $scope.options[0];
});