app.controller('MainController', ['$scope', 'instagramAPI', function($scope, instagramAPI) {
  $scope.view = {};
  $scope.view.authenticateInstagram = function() {
    instagramAPI.authenticateAccount();
  }
}])
