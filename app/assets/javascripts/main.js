$( document ).ready(function(){
   $(".button-collapse").sideNav();
   
   $('.dropdown-button').dropdown({
     inDuration: 300,
     outDuration: 225,
     gutter: 0, // Spacing from edge
     belowOrigin: true, // Displays dropdown below the button
   }
 );
})
