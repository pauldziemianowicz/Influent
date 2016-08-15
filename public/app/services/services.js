app.factory('instagramAPI', ['$http', function($http) {
  var service = {};
  service.authenticateAccount = function() {
    return $http.get("https://api.instagram.com/oauth/authorize/?client_id=" + service.instagramClientId + "&redirect_uri=https://influent.herokuapp.com&response_type=token")
  }
  service.returnInstagramClientId = function() {
    $http({
      method: "GET",
      url: "https://influent.herokuapp.com/api",
      headers: {"Access-Control-Allow-Origin": "https://influent.herokuapp.com/"}
    }).then(function(data){
      console.log(data);
      service.instagramClientId = data.data;
      console.log(service.instagramClientId);
    })
  }
  return service;
}])
