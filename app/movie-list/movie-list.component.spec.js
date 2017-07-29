describe('movieList', function() {

   // Load the module that contains the `movieList` component before each test
  beforeEach(module('movieApp'));

  describe('MovieListController', function(){

    // Test the controller
    it('should create a `movies` model with 4 phones', inject(function($componentController) {
      var ctrl = $componentController('movieList'); //we create an instance of the MovieListController

      expect(ctrl.movies.length).toBe(4);
    }));

  })
});
