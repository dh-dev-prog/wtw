angular.
  module('core.search').
    service('searchQuery', function(){

      var query = '';

      return {
        getQuery: function(){
          return query;
        },
        setQuery: function(value){
          query = value;
        }
      }

    })
