// function stageOn() {
//     if ($(window).innerWidth() > 175 ) {
//       $('.stage').mouseover(function() {
//           $(this).addClass('expanded', {duration:12000})
//           $('.stage').not(this).addClass('shrink', {duration:12000});
//       }).mouseout(function(){
//           $(this).removeClass('expanded', {duration:12000});
//           $('.stage').not(this).removeClass('shrink', {duration:12000});
//       })
//     };
//   }
  
//   $(document).ready( function() {
//     stageOn();
//   });
  
//   $(window).bind('resize',function(){
//       stageOn();
//   });
//   


$(document).ready( function() {
    var headerHeight= $('nav').outerHeight();
    console.log(headerHeight);
    $('.nav-link').click(function(e){
        var linkHref = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - (headerHeight+10)
        }, 1000);
        e.preventDefault();
    });
});