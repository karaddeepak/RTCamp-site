$(document).ready(function(){
   
  $('.bxsliderimg').bxSlider(
  {
   minSlides: 2,
  maxSlides: 5,
  slideWidth: 200,
 
  
  slideMargin: 10
  });
  
  $('[data-toggle="tooltip"]').tooltip(); 
  
  $(".jumbotron").hover(function(){
	  $("h1").addClass("animated bounceIn");
  },
  function(){
	  
	  $("h1").removeClass("animated bounceIn");
  
  });
  
  
});