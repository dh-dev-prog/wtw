'use strict';

angular.
module('appHeader').
component('appHeader', {
  templateUrl: 'header/header.template.html',
  controller: [
    function appHeaderController(){
      this.openNav = function(){
        document.querySelector('.header').classList.toggle('nav--open');
      }
  }]

})
