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
	$('.navbar-toggler').on('click', function() {
		// $('#menuanim').toggleClass('open').stop();
		$('#menuanim').each(function(i) { 
		    var elm=$(this);
		    setTimeout(function() { 
		        elm.toggleClass('open');
		    }, i * 250); 
		});	
		$('nav').each(function(i) { 
		    var elm=$(this);
		    setTimeout(function() { 
		        elm.toggleClass('full');
		    }, i * 250); 
		});
	});
	$('.nav-link').on('click', function() {
			$('nav').each(function(i) { 
		    var elm=$(this);
		    setTimeout(function() { 
		        elm.removeClass("full");;
		    }, i * 250); 
		});
		$('.navbar-collapse').each(function(i) { 
		    var elm=$(this);
		    setTimeout(function() { 
		        elm.removeClass("show");;
		    }, i * 250); 
		});
		$('#menuanim').each(function(i) { 
		    var elm=$(this);
		    setTimeout(function() { 
		        elm.removeClass("open");
		    }, i * 250); 
		});	
	});
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