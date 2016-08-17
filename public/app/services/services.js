app.factory('instagramAPI', ['$q', '$window', '$http', '$timeout', function($q, $window, $http, $timeout) {
  var service = {};

  service.authenticateAccount = function() {

    function getAccessToken() {
      $window.location.href = "https://api.instagram.com/oauth/authorize/?client_id=" + service.instagramClientId + "&redirect_uri=https://influent.herokuapp.com&response_type=token";
      console.log($window.location.href);
      if($window.location.href === "https://api.instagram.com/oauth/authorize/?client_id=" + service.instagramClientId + "&redirect_uri=https://influent.herokuapp.com&response_type=token") {
        return "instagram authentication URL loaded";
      } else {
        return "authentication URL failed to load";
      }
    }

    return $timeout(getAccessToken(), 0).then(function() {
      return $window.location.hash.split('').splice(15, $window.location.hash.length).join('');
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
      next(error);
    })
  }

  return service;

}])
