describe('movieList', function() {

   // Load the module that contains the `movieList` component before each test
  beforeEach(module('movieList'));

  describe('MovieListController', function(){
    var $httpBackend, ctrl;
    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service and assign it to a variable with the same name
    // as the service while avoiding a name conflict.
    beforeEach(inject(function($componentController, _$httpBackend_){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('movies/movies.json')
            .respond([{title: 'john wick 2'}, {title: 'logan'}]);
      ctrl = $componentController('movieList');
    }))

    // Test the controller
    it('should create a `movie` property with 2 phones fetched with `$http`', function() {
      expect(ctrl.movies).toBeUndefined();
      $httpBackend.flush();
      expect(ctrl.movies).toEqual([{title: 'john wick 2'}, {title: 'logan'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('date');
    });


  })
});
