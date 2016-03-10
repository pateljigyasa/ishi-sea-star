$(document).ready(function() {
	$(".contentContainer").css("min-height",$(window).height()); 
	$("#topCol").css("height",$(window).height()); 
	//$(".video-image").bg_fit();
	//$('.col-eq').colequalizer();
	//var offset = 80;
	var navOffset = $('.navbar').height();
	$('#nav-contact-us').click(function(event) {
	    event.preventDefault();
	    $($(this).attr('href'))[0].scrollIntoView();
	    scrollBy(0, -navOffset);
	     
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
	 
 
});
 