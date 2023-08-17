$(function() {
  $('.menu-toggle').click(function() {
    $(this).toggleClass('active');
    event.stopPropagation();
  });
  
  $('.body').click(function(){
     $('.menu-toggle').removeClass('active');
  });
  
  
  $('.scalable-image').click(function() {
    $(this).toggleClass('scaled');
  });
  
    $('.scalable').click(function() {
    $(this).toggleClass('scaling');
  });
  
   $('.scalable-godel').click(function() {
    $(this).toggleClass('scaled');
  });

});
