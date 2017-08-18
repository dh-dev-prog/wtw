angular.
  module('movieDetail').
    component('movieDetail', {
      templateUrl: 'movie-detail/movie-detail.template.html',
      controller: ['Movie','$routeParams',
        function MovieDetailController(Movie, $routeParams){
          this.movie = Movie.get({movieId: $routeParams.movieId});
          console.log(this.movie, $routeParams.movieId);
        }]
    })
