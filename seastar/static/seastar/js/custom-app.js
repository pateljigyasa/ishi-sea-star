$(document).ready(function() {
	$(".contentContainer").css("min-height",$(window).height()); 
	$("#topCol").css("height",$(window).height());  
	//$("#contact-form").css("height",$(window).height()); 
	$('.col-eq').colequalizer();
	$('#technical-specs-col3').css("height",$("#technical-specs-col1"). height());
	$('#technical-specs-col4').css("height",$("#technical-specs-col1").height());
	$('#eye-specs-col4').css("height",$("#eye-specs-col1"). height());
	$('#eye-specs-col5').css("height",$("#eye-specs-col1").height());
	
	$(".various").fancybox({
		maxWidth	: 1200,
		maxHeight	: 800,
		fitToView	: false,
		width		: '100%',
		height		: '100%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none', 
	});
	$(".fancybox").fancybox({
		helpers : {
			overlay : {
				css : {
					'background' : 'rgba(58, 42, 45, 1)'
				}
			}
		}
		});
	  
	//$(".video-production-bg").backstretch(video_production_bg_url);
	//$(".video-image").bg_fit();
	//$('.col-eq').colequalizer();
	//var offset = 80;
	/*var navOffset = $('.navbar').height();
	$('#nav-contact-us').click(function(event) {
	    event.preventDefault();
	    $("#contact-form")[0].scrollIntoView();
	    //scrollBy(0, -50);
	     
	});*/
	/*var hashURL = location.hash;
    if(hashURL != "" && hashURL.length > 1){
        $(window).scrollTop(0);
        $('html').css({display: 'block'});
        smoothScrollTo();
    } else {
        $('html').css({display: 'block'});
    }
    
    function smoothScrollTo() {
    	var navOffset = $('.navbar').height(); 
    	$("#contact-form")[0].scrollIntoView(true);
    }*/
    
  /* $('#nav-contact-us').bind('click', function(event){
	   event.preventDefault(); 
        smoothScrollTo();
        return false;
    });*/
	 
	 
});
	 

	
	 

	
	 


	
	/*$("img").load(function() {
		$(".left-about-overlay").css("height",$("#left-about-img").height());
		$(".right-about-overlay").css("height",$("#right-about-img").height());
		//$(".left-about-img-bg").css("height",$("#left-about-img").height());
		//$(".right-about-img-bg").css("height",$("#right-about-img").height());
	});
	 $(window).resize(function() {
		 $(".left-about-overlay").css("height",$("#left-about-img").height());
		 $(".right-about-overlay").css("height",$("#right-about-img").height());
		 //$(".left-about-img-bg").css("height",$("#left-about-img").height());
		 //$(".right-about-img-bg").css("height",$("#right-about-img").height());
	 });*/
	 
 
 
 