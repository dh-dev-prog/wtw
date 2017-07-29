'use strict';

// Contoller: The controller is simply a constructor function that takes a $scope parameter
angular.
module('movieList').
component('movieList', {
  // Note: The URL is relative to our `index.html` file
  templateUrl: 'movie-list/movie-list.template.html',
  controller: function MovieListController(){
    this.movies = [
      {
        "title": "john wick 2",
        "image": "assets/image/poster/john_wick_2_poster.jpg",
        "background": "assets/image/background/john_wick_2_bg.jpg",
        "synopsis": "John Wick is forced out of retirement, and this time, he must face off against a shadowy international assassins'guild and more of the world's deadliest killers.",
        "genre": ["Action", "Crime", "Thriller"],
        "rating": "7,7",
        "date": "2017-08-27",
        "director": "Chad Stahelski",
        "actor": ["Keanu Reeves", "Riccardo Scamarcio", "Ian McShane"],
        "trailer": "http://www.imdb.com/videoembed/vi1127331353",
        "hero": false
      }, {
        "title": "logan",
        "image": "assets/image/poster/logan_poster.jpg",
        "background": "assets/image/background/logan_bg.jpg",
        "synopsis": "In the near future, Logan's attempts to hide out on the Mexican border with an ailing Professor X are up-ended when a young mutant arrives, being pursued by dark forces.",
        "genre": ["Action", "Drama", "Sci-Fi"],
        "rating": "8,2",
        "date": "2017-06-20",
        "director": "James Mangold",
        "actor": ["Hugh Jackman", "Patrick Stewart", "Dafne Keen"],
        "trailer": "http://www.imdb.com/videoembed/vi1946727961",
        "hero": true
      }, {
        "title": "guardians of the galaxy vol.2",
        "image": "assets/image/poster/guardians_of_the_galaxy_vol2_poster.jpg",
        "background": "assets/image/background/guardians_of_the_galaxy_vol2_bg.jpg",
        "synopsis": "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage.",
        "genre": ["Action", "Adventure", "Sci-Fi"],
        "rating": "8,1",
        "date": "2017-08-05",
        "director": "James Gunn",
        "actor": ["Chris Pratt", "Zoe Saldana", "Dave Bautista" ],
        "trailer": "http://www.imdb.com/videoembed/vi3076896281",
        "hero": false
      }, {
        "title": "baby driver",
        "image": "assets/image/poster/baby_driver_poster.jpg",
        "background": "assets/image/background/baby_driver_bg.jpg",
        "synopsis": "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
        "genre": ["Action", "Crime", "Music"],
        "rating": "8,3",
        "date": "2017-11-05",
        "director": "James Gunn",
        "actor": ["Ansel Elgort", "Jon Bernthal", "Jon Hamm"],
        "trailer": "http://www.imdb.com/videoembed/vi2482288921",
        "hero": false
      }
    ]
  }
})
