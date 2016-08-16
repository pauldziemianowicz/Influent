app.controller('MainController', ['$scope', '$window', 'instagramAPI', '$timeout', function($scope, $window, instagramAPI, $timeout) {
  instagramAPI.returnInstagramClientId();

  $scope.view = {};
  $scope.data = {}

  $scope.view.authenticateInstagram = function() {
    instagramAPI.authenticateAccount();
    console.log(instagramAPI.token);
    $timeout(console.log(instagramAPI.token), 500);
    // console.log($window.location.hash.split('').splice(15, $window.location.hash.length).join(''));
    // $scope.data.accessToken = $window.location.hash.split('').splice(15, $window.location.hash.length).join('');
  };

  $scope.view.printAccessToken = function() {
    console.log(instagramAPI.accessToken);
    // console.log($window.location.hash.split('').splice(15, $window.location.hash.length).join(''));
    // $scope.data.accessToken = $window.location.hash.split('').splice(15, $window.location.hash.length).join('');
    // console.log($scope.data.accessToken);
  };

  // $scope.view.apiAccessTokenTest = function() {
  //   console.log(instagramAPI.accessToken);
  // };

  $scope.view.returnInstagramClientId = function() {
    console.log(instagramAPI.instagramClientId);
  };
}])
