'use strict';

describe('Movie Application', function() {

  describe('movieList', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    it('should filter the movie list as a user types into the search box', function() {
      var movieList = element.all(by.repeater('movie in $ctrl.movies'));
      var query = element(by.model('$ctrl.query.title'));

      expect(movieList.count()).toBe(4);

      query.sendKeys('logan');
      expect(movieList.count()).toBe(1);

      query.clear();
      query.sendKeys('ga');
      expect(movieList.count()).toBe(2);
    });

    it('should be possible to control movie order via the drop-down menu', function() {
     var queryField = element(by.model('$ctrl.query.title'));
     var orderSelect = element(by.model('$ctrl.orderProp'));
     var titleOption = orderSelect.element(by.css('option[value="title"]'));
     var movieTitleColumn = element.all(by.repeater('movie in $ctrl.movies').column('movie.title'));

     function getTitles() {
       return movieTitleColumn.map(function(elem) {
         return elem.getText();
       });
     }

     queryField.sendKeys('ga');   // Let's narrow the dataset to make the assertions shorter

     expect(getTitles()).toEqual([
       'LOGAN',
       'GUARDIANS OF THE GALAXY VOL.2'
     ]);

     titleOption.click();

     expect(getTitles()).toEqual([
       'GUARDIANS OF THE GALAXY VOL.2',
       'LOGAN'
     ]);
   });


  });

});
