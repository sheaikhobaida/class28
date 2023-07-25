(function($){
    
    
 $('#cold').show();   
 $('#spicy').html('<u>Our civilisation</u> is human center'); $('.mobile').prepend('<b>Hello</b>');
 $('.mobile').append('Thank you');    

  
 $('#cold').css({
     color : 'red',
     backgroundColor : '#2980b9',
     fontSize : 36
    
 });  
  
//  $('.oraimo').children('a').hide();  
    
  $('.matador').parent('.oraimo').css({
      width: '50%',
      margin: 'auto',
      backgroundColor : '#ddd',
      padding : 22
  });  
   
  $('#lite').on( 'click', function () {
    $('.mobile').toggle();
 } );   
    

        
}) (jQuery);