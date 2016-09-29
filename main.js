$(document).ready(function(){
   $('#sign-in-link').click(function(ev){
       $('#sign-in-form').delay(200).fadeIn(300);
       $('#sign-up-form').fadeOut(200);
       $('#sign-up-link').removeClass('active');
       $(this).addClass('active');
       ev.preventDefault();
   });
    
   $('#sign-up-link').click(function(ev){
       $('#sign-up-form').delay(200).fadeIn(300);
       $('#sign-in-form').fadeOut(200);
       $('#sign-in-link').removeClass('active');
       $(this).addClass('active');
       ev.preventDefault();
   });
});