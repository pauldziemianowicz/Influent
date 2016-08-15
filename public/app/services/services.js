app.factory('instagramAPI', ['$http', function($http) {
  var service = {};
  service.authenticateAccount = function() {
    return $http.get("https://api.instagram.com/oauth/authorize/?client_id=" + service.instagramClientId + "&redirect_uri=https://influent.herokuapp.com&response_type=token")
  }
  service.returnInstagramClientId = function() {
    $http.get("https://127.0.0.1:3000/api").then(function(data){
      service.instagramClientId = data.data;
    })
  }
  return service;
}])
