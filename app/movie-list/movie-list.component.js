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
      $http.get('https://dh-dev-prog.github.io/wtw/app/movies/movies.json').then(function(response){
        //when I get the data from the request and only when,
        //if console.log(self.movies) after the http.request, it will log undefined, undefined
        //'this' is not defined here because $http is a callback function. so we use self
        var taglist = {};
        self.movies = response.data.movies;

        self.hero = self.movies.find(function(movie){
            return movie.hero;
        });

        self.movies.forEach(function(movie){
          movie.genre.forEach(function(tag){
            if(!taglist[tag]) {
              taglist[tag] = [];
            }
            taglist[tag].push(movie);
          })
        })
        self.taglist = taglist;

      }).catch(function(e){
        console.log('Error:', e);
      })

      this.propertyName = 'date'; //default order
      this.reverse = false;

      this.sortBy = function(propertyName){
        this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
        this.propertyName = propertyName;
      }

      this.byTag = function(tagList, $event){
        this.movies = tagList;
        var list = document.querySelector('.tag--list').getElementsByTagName('li');
        Array.prototype.forEach.call(list, function(li){
          li.classList.remove('is-active');
        })
        if(!$event.currentTarget.classList.contains('is-active')) {
          $event.currentTarget.classList.add('is-active');
        } else {
          $event.currentTarget.classList.remove('is-active');
        }
      }
      this.focusSearch = function(query){
        document.querySelector('.header').classList.toggle('header--close');
        document.querySelector('.filter').classList.toggle('header--close');
        document.querySelector('.main--wrapper').classList.toggle('header--close');
        document.querySelector('.filter--search-input').value = "";
      }
    }
  ]
})
