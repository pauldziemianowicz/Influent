app.factory('instagramAPI', ['$http', function($http) {
  var service = {};
  service.authenticateAccount = function() {
    return $http.get("https://api.instagram.com/oauth/authorize/?client_id=" + process.env.INSTAGRAM_CLIENT_ID + "&redirect_uri=https://influent.herokuapp.com&response_type=token")
  }
  return service;
}])
