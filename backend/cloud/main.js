Parse.Cloud.define('search', function(request, response){
  var nameQuery = new Parse.Query("gatherings");
  nameQuery.matches("gatherName", new RegExp(request.params.search, 'i'));

  var cityQuery = new Parse.Query("gatherings");
  cityQuery.matches("gatherCity", new RegExp(request.params.search, 'i'));

  var stateQuery = new Parse.Query("gatherings");
  cityQuery.matches("gatherState", new RegExp(request.params.search, 'i'));

  var query = Parse.Query.or(nameQuery, cityQuery, stateQuery);
  query.find().then(function(results) {
    response.success(results);
  }, function(error) {
    response.error(error);
  });
});
