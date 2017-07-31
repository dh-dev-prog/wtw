'use strict';

// Contoller: The controller is simply a constructor function that takes a $scope parameter
angular.
module('movieList').
component('movieList', {
  // Note: The URL is relative to our `index.html` file
  templateUrl: 'movie-list/movie-list.template.html',
  controller: ['$http',
    function MovieListController($http){
      //AngularJS's dependency injector provides services to your controller,
      //when the controller is being constructed

      var self = this;

      //Since we are making the assignment of the movies property in a callback function,
      //where the this value is not defined, we also introduce a local variable called self
      //that points back to the controller instance.
      $http.get('movies/movies.json').then(function(response){
        var taglist = {};
        self.movies = response.data.movies;

        self.movies.forEach(function(movie){
          movie.genre.forEach(function(tag){
            if(!taglist[tag]) {
              taglist[tag] = [];
            }
            taglist[tag].push(movie);
          })
        })
        self.taglist = taglist;
      })

      this.propertyName = 'date'; //default order
      this.reverse = false;
      this.sortBy = function(propertyName){
        this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
        this.propertyName = propertyName;
      }
      this.byTag = function(array){
        this.movies = array;
      }
      console.log(this);
    }
  ]
})
