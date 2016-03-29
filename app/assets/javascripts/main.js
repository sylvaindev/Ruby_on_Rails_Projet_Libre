$(document).on('page:load', function() {

   $(".button-collapse").sideNav();

   $('.dropdown-button').dropdown({
     inDuration: 300,
     outDuration: 225,
     belowOrigin: true,
   });

   $('.tooltipped').tooltip({delay: 50});

   $('select').material_select();

});

$(document).ready(function() {
    $('select').material_select();
  });
