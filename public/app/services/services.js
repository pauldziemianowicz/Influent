app.factory('instagramAPI', ['$q', '$window', '$http', function($q, $window, $http) {
  var service = {};
  service.accessToken = $window.location;
  service.authenticateAccount = function() {
    $window.location.href="https://api.instagram.com/oauth/authorize/?client_id=" + service.instagramClientId + "&redirect_uri=https://influent.herokuapp.com&response_type=token";
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
