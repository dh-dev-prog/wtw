'use strict';

angular.
  module('appHero').
    component('appHero', {
      templateUrl: 'hero/hero.template.html',
      controller: ['Movie', 'searchQuery',
        function HeroController(Movie, searchQuery) {
          var self = this;
          Movie.query(function(data){
            self.hero = data.find(function(movie){
              return movie.hero === true
            })
            // make the alt text disappear when page loads
            self.hero.alt = self.hero.title + ' is the movie of the week';
          })

          this.focusSearch = function(){
            document.querySelector('.filter--search-input').value = "";
          }

          searchQuery.setQuery(self.value)
        }
      ]
    })
