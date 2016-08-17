app.controller('MainController', ['$scope', '$window', 'instagramAPI', '$timeout', '$http', function($scope, $window, instagramAPI, $timeout, $http) {
  instagramAPI.returnInstagramClientId();

  $scope.view = {};
  $scope.data = {}
  $scope.data.token = localStorage.influentInstagramToken;
  $scope.data.tokenInUrl = ($window.location.hash.split('').splice(0, 15).join('') === "#/access_token=")

  $scope.view.authenticateInstagram = function() {
    instagramAPI.authenticateAccount().then(function(data) {
      console.log(data);
      // localStorage.influentInstagramToken = data;
      console.log($scope.data.token);
    })
    // console.log($window.location.hash.split('').splice(15, $window.location.hash.length).join(''));
    // $scope.data.accessToken = $window.location.hash.split('').splice(15, $window.location.hash.length).join('');
  };

  $scope.view.storeAccessToken = function() {
    localStorage.influentInstagramToken = $window.location.hash.split('').splice(15, $window.location.hash.length).join('');
    console.log("stored access token in localStorage: ", $window.location.hash.split('').splice(15, $window.location.hash.length).join(''));
    $window.location.href = "https://influent.herokuapp.com/#/"
    $window.location.reload();
  };

  $scope.view.printAccessToken = function() {
    console.log($scope.data.token);
  }

  // $scope.view.checkIfTokenInUrl = function() {
  //   if ($window.location.hash.split('').splice(0, 15) === "#/access_token=") {
  //     $scope.data.tokenInUrl = true;
  //   } else {
  //     $scope.data.tokenInUrl = false;
  //   }
  // }

  $scope.view.removeAccessToken = function() {
    localStorage.removeItem('influentInstagramToken');
    $window.location.reload();
  };

  $scope.view.returnInstagramClientId = function() {
    console.log(instagramAPI.instagramClientId);
  };

  $scope.view.getUserData = function(accessToken) {
    // console.log($scope.data.token);
    // console.log(instagramAPI.getUserData($scope.data.token));
    // $scope.data.userData = instagramAPI.getUserData($scope.data.token);
    // console.log($scope.data.userData);

    $http.jsonp("https://api.instagram.com/v1/users/self/?access_token=" + accessToken + "&callback=JSON_CALLBACK")
    .success(function(data) {
      console.log(data);
      $scope.data.userData = data;
    })
    console.log($scope.data.userData);
  }

  $scope.view.getUserMedia = function(accessToken) {
    // console.log($scope.data.token);
    // console.log(instagramAPI.getUserData($scope.data.token));
    // $scope.data.userData = instagramAPI.getUserData($scope.data.token);
    // console.log($scope.data.userData);

    $http.jsonp("https://api.instagram.com/v1/users/self/media/recent?access_token=" + accessToken + "&callback=JSON_CALLBACK")
    .success(function(data) {
      console.log(data);
      $scope.data.userMedia = data;
    })
    console.log($scope.data.userMedia);
  }

}])
