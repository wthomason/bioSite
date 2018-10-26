/* Smooth scrolling */
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
 /* Smooth scrolling ends */

/*start of bouncing circle to disappear*/

$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.encircle').fadeOut();
     }
    
 });

$( document ).ready(function() {
   
});

/*end of bouncing circle to disappear*/


/* Start of logo scroll rate*/

$(window).scroll(function(){
   
  var wScroll = $(this).scrollTop();

     $('.logo').css({
         'transform' : 'translate(0px,'+ wScroll * 1.30 +'%)'
     });
  
});


/* End of logo scroll rate */
