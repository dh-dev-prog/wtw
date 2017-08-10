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
        self.hero = response.data.movies.find(function(movie){
            return movie.hero;
        });

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
      this.showFull = function($event, $index){

        var movie = document.getElementsByClassName('movie');
        var movieFull = document.getElementsByClassName('movie-full');
        var movieContent = document.getElementsByClassName('movie--content');
        Array.prototype.forEach.call(movie, function(movie){
          movie.classList.remove('movie--open-0');
          movie.classList.remove('movie--open-1');
          movie.classList.remove('movie--open-2');
        })
        Array.prototype.forEach.call(movieFull, function(movie){
          movie.classList.remove('movie-full--open');
        })
        /*Array.prototype.forEach.call(movieContent, function(movie){
          movie.classList.remove('movie--content-open');
        })
        Array.prototype.forEach.call(movieContent, function(movie){
          movie.classList.remove('movie--content-open');
        })*/
        var name = 'movie--open-';
        function indexRecursive(index){
          console.log(index);
            if(index === 0) return name += '0';
            if(index === 1) return name += '1';
            if(index === 2) return name += '2';
            return indexRecursive(index - 3); //have to return the outer function or it yields undefined
            //A function that does not execute return will yield undefined.
            //for index=3, on second turn, if(index===0) return name...it returns +='0' to that function call,
            //which never gets returned to the original function call indexRecursive(index - 3).
            //So the solution is simply to add a return before the one where it calls itself.
            //So return name will be returned to the function that called it. if no return index will change but
            //return name will stay flying somewhere
         }

         var className = indexRecursive($index);
         console.log(className);
         $event.currentTarget.classList.toggle(className);
         $event.currentTarget.querySelector('.movie-full').classList.toggle('movie-full--open');

        /*$event.currentTarget.querySelector('.movie--content').classList.toggle('movie--content-open');*/
      }
    }
  ]
})
