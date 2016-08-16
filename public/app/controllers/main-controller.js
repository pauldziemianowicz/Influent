app.controller('MainController', ['$scope', 'instagramAPI', function($scope, instagramAPI) {
  instagramAPI.returnInstagramClientId();

  $scope.view = {};
  $scope.data = {}

  $scope.view.authenticateInstagram = function() {
    instagramAPI.authenticateAccount();
    $scope.data.accessToken = $window.location.hash.split('').splice(15, $window.location.hash.length).join('');
  }
  $scope.view.printAccessToken = function() {
    console.log($scope.data.accessToken);
  }
  $scope.view.apiAccessTokenTest = function() {
    console.log(instagramAPI.accessToken);
  }
  $scope.view.returnInstagramClientId = function() {
    console.log(instagramAPI.instagramClientId);
  }
}])
