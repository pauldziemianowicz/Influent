app.factory('instagramAPI', ['$http', function($http) {
  var service = {};
  service.authenticateAccount = function() {
    return $http.get("https://api.instagram.com/oauth/authorize/?client_id=" + service.instagramClientId + "&redirect_uri=https://influent.herokuapp.com&response_type=token")
  }
  service.returnInstagramClientId = function() {
    $http.get("https://influent.herokuapp.com/api").then(function(data){
      console.log(data);
      service.instagramClientId = data.data;
      console.log(service.instagramClientId);
    })
  }
  return service;
}])
