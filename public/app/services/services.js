app.factory('instagramAPI', ['$q', '$window', '$http', '$timeout', '$interval', function($q, $window, $http, $timeout, $interval) {
  var service = {};

  service.authenticateAccount = function() {

    function getAccessToken() {
      $window.location.href = "https://api.instagram.com/oauth/authorize/?client_id=" + service.instagramClientId + "&redirect_uri=https://influent.herokuapp.com&response_type=token";
      console.log($window.location.href);
    }

    return $timeout(getAccessToken(), 0).then(function() {
      console.log($window.location.href);
      return $window.location.hash.split('').splice(15, $window.location.hash.length).join('');

    //   $interval(function() {
    //   console.log($window.location.hash.split('').splice(0, 14).join(''));
    //   if ($window.location.hash.split('').splice(0, 14).join('') === "#access_token=") {
    //     $interval.cancel();
    //     return $window.location.hash.split('').splice(14, $window.location.hash.length).join('');
    //   } else {
    //       console.log("not yet!");
    //   }
    // }, 100)
      // return $window.location.hash.split('').splice(14, $window.location.hash.length).join('');
    })

    // $window.location.href="https://api.instagram.com/oauth/authorize/?client_id=" + service.instagramClientId + "&redirect_uri=https://influent.herokuapp.com&response_type=token";
    // service.accessToken = $window.location.hash.split('').splice(15, $window.location.hash.length).join('');
  }

  service.returnInstagramClientId = function() {
    $http({
      method: "GET",
      url: "https://influent.herokuapp.com/api",
    }).then(function(data){
      service.instagramClientId = data.data;
    }).catch(function(error) {
      console.log(error);
    })
  }

  service.getUserData = function(accessToken) {
    // $http({
    //   method: "JSONP",
    //   url: "https://api.instagram.com/v1/users/self/?access_token=" + accessToken + "&callback=JSON_CALLBACK",
    //   headers: {"Access-Control-Allow-Origin": "https://influent.herokuapp.com"}
    // })
    // .success(function(data) {
    //   return data
    // })
    // .catch(function(error) {
    //   return error;
    // })
    $http.jsonp("https://api.instagram.com/v1/users/self/?access_token=" + accessToken + "&callback=JSON_CALLBACK")
    .success(function(data) {
      console.log(data);
      return data;
    })
  }

  return service;

}])
