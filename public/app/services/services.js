app.factory('instagramAPI', ['$q', '$window', '$http', '$timeout', function($q, $window, $http, $timeout) {
  var service = {};
  service.accessToken;

  service.authenticateAccount = function() {

    function getAccessToken() {
      $window.location.href = "https://api.instagram.com/oauth/authorize/?client_id=" + service.instagramClientId + "&redirect_uri=https://influent.herokuapp.com&response_type=token";
      if($window.location.href === "https://api.instagram.com/oauth/authorize/?client_id=" + service.instagramClientId + "&redirect_uri=https://influent.herokuapp.com&response_type=token") {
        return "instagram authentication URL loaded";
      } else {
        return "authentication URL failed to load";
      }
    }

    return $timeout(getAccessToken(), 0).then(function() {
      console.log("whoop dee doo");
    })

    // $window.location.href="https://api.instagram.com/oauth/authorize/?client_id=" + service.instagramClientId + "&redirect_uri=https://influent.herokuapp.com&response_type=token";
    // service.accessToken = $window.location.hash.split('').splice(15, $window.location.hash.length).join('');
  }

  service.printLocation = function() {
    console.log(service.accessToken);
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
