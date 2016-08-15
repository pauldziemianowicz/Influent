app.factory('instagramAPI', ['$window', '$http', function($window, $http) {
  var service = {};
  service.authenticateAccount = function() {
    $window.location.href="https://api.instagram.com/oauth/authorize/?client_id=" + service.instagramClientId + "&redirect_uri=https://influent.herokuapp.com&response_type=token";
  }
  service.returnInstagramClientId = function() {
    $http({
      method: "GET",
      url: "https://influent.herokuapp.com/api",
    }).then(function(data){
      console.log(data);
      service.instagramClientId = data.data;
      console.log(service.instagramClientId);
    }).catch(function(error) {
      console.log(error);
    })
  }
  return service;
}])
