app.controller('MainController', ['$scope', '$window', 'instagramAPI', '$timeout', function($scope, $window, instagramAPI, $timeout) {
  instagramAPI.returnInstagramClientId();

  $scope.view = {};
  $scope.data = {}
  $scope.data.token = localStorage.influentInstagramToken;

  $scope.view.authenticateInstagram = function() {
    instagramAPI.authenticateAccount().then(function(data) {
      console.log(data);
      localStorage.influentInstagramToken = data;
      console.log($scope.data.token);
    })
    // console.log($window.location.hash.split('').splice(15, $window.location.hash.length).join(''));
    // $scope.data.accessToken = $window.location.hash.split('').splice(15, $window.location.hash.length).join('');
  };

  $scope.view.storeAccessToken = function() {
    localStorage.influentInstagramToken = ($window.location.hash.split('').splice(0, 15).join(''))
    console.log("stored access token in localStorage: ", $window.location.hash.split('').splice(0, 15).join(''));
    console.log($scope.data.token);
    $window.location.reload();
  };

  $scope.view.removeAccessToken = function() {
    localStorage.removeItem('influentInstagramToken');
    $window.location.reload();
  };

  $scope.view.returnInstagramClientId = function() {
    console.log(instagramAPI.instagramClientId);
  };
}])
