$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
});

$(document).ready(function() {
	$(".contentContainer").css("min-height",$(window).height()); 
	$("#topCol").css("height",$(window).height());  
	//$("#contact-form").css("height",$(window).height()); 
	$('.col-eq').colequalizer();
	$('#technical-specs-col3').css("height",$("#technical-specs-col1"). height());
	$('#technical-specs-col4').css("height",$("#technical-specs-col1").height());
	$('#eye-specs-col4').css("height",$("#eye-specs-col1"). height());
	$('#eye-specs-col5').css("height",$("#eye-specs-col1").height());
	//$('.thumbnails').css("height",$("#eye-image-container").height());
	
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
	  
	 
	/*function smoothScrollTo() {
		var navOffset = $('.navbar').height();
		$('#nav-contact-us').click(function(event) {
		    event.preventDefault();
		    $("#contact-form")[0].scrollIntoView();
		    scrollBy(0, -navOffset);
		     
		});
	}
	var hashURL = location.hash;
    if(hashURL != "" && hashURL.length > 1){ 
        smoothScrollTo();
    } else {
        $('html').css({display: 'block'});
    }*/
    
    
    
 
	
	
	//When contact us form submit is clicked
	 $("#contactFormSubmit").click(function(e) {

		//Prevent default submit. Must for Ajax post.Beginner's pit.
		 e.preventDefault(); 
		 //clear all fields before showing errors
		 clearErrorFields();
		  
	
		//Collect data from fields
		 var name = $('#id_name').val();
		 var email = $('#id_email').val();
		 var phoneno = $('#id_phoneno').val();
		 var company = $('#id_company').val();
		 var msg = $('#id_message').val();
	
		//This is the Ajax post.Observe carefully. It is nothing but details of where_to_post,what_to_post
		//Send data   
		 $.support.cors = true; 
		 $.ajax({
		       url : ajax_contact_us_url, // the endpoint,commonly same url
		       type : "POST", // http method  
		       dataType: "json",
		       timeout: timeout,
		       cache:false, 
		       data : {   
		       name : name,
		       email : email,
		       phoneno: phoneno,
		       company: company,
		       message: msg
		 }, // data sent with the post request
	
		 // handle a successful response
		 success : function(data) {  
			 if(!data || data == null || jQuery.isEmptyObject(data)) {
				 $("#formErrors").html("We are experiencing some problems, please try later."); 
				 $("#formErrors").addClass("alert");
				 $("#formErrors").addClass("alert-danger"); 
			 }
			 else {
				 if(data.success) { 
					 $("#formErrors").html(data.data);
					 $("#formErrors").addClass("alert");
					 $("#formErrors").addClass("alert-success");
					 $("#cform")[0].reset();
				 }else {  
					 if(Object.prototype.toString.call(data.error) == '[object String]'){ 
						 $("#formErrors").html(data.error); 
						 $("#formErrors").addClass("alert");
						 $("#formErrors").addClass("alert-danger");
					 }else { 
						 $.each(data.error, function(key,value) { 
							 if(value.field == 'name') {
								 $("#nameError").html(value.msg);
								 $("#nameError").addClass("alert");
								 $("#nameError").addClass("alert-danger");
							 }
							 if(value.field == 'email') {
								 $("#emailError").html(value.msg);
								 $("#emailError").addClass("alert");
								 $("#emailError").addClass("alert-danger");
							 }
							 if(value.field == 'phone') {
								 $("#phoneError").html(value.msg);
								 $("#phoneError").addClass("alert");
								 $("#phoneError").addClass("alert-danger");
							 }
							 
						 });
					 }
				 }
			 }
		 },
	
		 // handle a non-successful response
		 error : function(xhr,errmsg,err) {
			 if(errmsg == 'timeout') {
				 $("#formErrors").html("Connection time out. Please try again later."); 
				 $("#formErrors").addClass("alert");
				 $("#formErrors").addClass("alert-danger");
			 }else { 
				 $("#formErrors").html("We are experiencing some problems, please try later."); 
				 $("#formErrors").addClass("alert");
				 $("#formErrors").addClass("alert-danger");
			 }
		 }
		 });
	});//end click submit button
	
	 //clear all fields
	function clearErrorFields() {
		 $("#formErrors").html('');
		  $("#formErrors").removeClass("alert-success");
		  $("#formErrors").removeClass("alert-danger");
		  $("#nameError").html('');
		  $("#nameError").removeClass("alert-danger");
		  $("#emailError").html('');
		  $("#emailError").removeClass("alert-danger");
		  $("#phoneError").html('');
		  $("#phoneError").removeClass("alert-danger");
	}
	//function to start indicator
	function ajaxindicatorstart(text)
	{
		if(jQuery('body').find('#resultLoading').attr('id') != 'resultLoading'){
		jQuery('body').append('<div id="resultLoading" style="display:none"><div><img src='+loader_gif_image+'><div>'+text+'</div></div><div class="bg"></div></div>');
		}
		
		jQuery('#resultLoading').css({
			'width':'100%',
			'height':'100%',
			'position':'fixed',
			'z-index':'10000000',
			'top':'0',
			'left':'0',
			'right':'0',
			'bottom':'0',
			'margin':'auto'
		});	
		
		jQuery('#resultLoading .bg').css({
			'background':'#000000',
			'opacity':'0.7',
			'width':'100%',
			'height':'100%',
			'position':'absolute',
			'top':'0'
		});
		
		jQuery('#resultLoading>div:first').css({
			'width': '250px',
			'height':'75px',
			'text-align': 'center',
			'position': 'fixed',
			'top':'0',
			'left':'0',
			'right':'0',
			'bottom':'0',
			'margin':'auto',
			'font-size':'16px',
			'z-index':'10',
			'color':'#ffffff'
			
		});

	    jQuery('#resultLoading .bg').height('100%');
        jQuery('#resultLoading').fadeIn(300);
	    jQuery('body').css('cursor', 'wait');
	}
	
	//function to stop indicator
	function ajaxindicatorstop()
	{
	    jQuery('#resultLoading .bg').height('100%');
        jQuery('#resultLoading').fadeOut(300);
	    jQuery('body').css('cursor', 'default');
	}
	
	//load waiting cursor
	jQuery(document).ajaxStart(function () {
		//show ajax indicator
		ajaxindicatorstart('loading data.. please wait..');
	}).ajaxStop(function () {
		//hide ajax indicator
		ajaxindicatorstop();
	});
	 
});//end document ready function


	 

	
	 

	
	 


	
	 
	 
 
 
 