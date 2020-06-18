(function($){
	$(document).ready(function(){
            
  $.validator.addMethod("regex", function(value, element, regexpr) {          
     return regexpr.test(value);
   }, "Please review and enter valid value."); 
		// Contact forms validation
                if($("#contact-form").length>0) {
			$("#contact-form").validate({		
				// debug: true,
				errorPlacement: function(error, element) {
					error.insertBefore( element );
				},
				onkeyup: false,
				onclick: false,
				rules: {
					name: {
						required: true,
						minlength: 5,
                                                regex: /^[a-z,0-9,A-Z_\-. ]{5,100}$/
                                                
					},
					email: {
						required: true,
						email: true,
                                                regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
					},
					subject: {
						required: true,
                                                minlength: 3
					},
					message: {
						required: true,
						minlength: 10
					}
				},
				messages: {
					name: {
						required: "Please specify your name",
						minlength: "Your name must be longer than 5 characters"
					},
					email: {
						required: "We need your email address to contact you",
						email: "Please enter a valid email address e.g. name@domain.com"
					},
					subject: {
						required: "Please enter a subject",
                                                minlength: "Your name must be longer than 3 characters"
					},
					message: {
						required: "Please enter a message",
						minlength: "Your message must be longer than 10 characters"
					}
				},
				errorElement: "span",
				highlight: function (element) {
					$(element).parent().removeClass("has-success").addClass("has-error");
					$(element).siblings("label").addClass("hide"); 
				},
				success: function (element) {
					$(element).parent().removeClass("has-error").addClass("has-success");
					$(element).siblings("label").removeClass("hide"); 
				}
			});
		};          
            
            
            
}); // End document ready

})(this.jQuery);
