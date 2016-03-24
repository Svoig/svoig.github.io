
$(document).ready(function() {


	console.log("In the JS file");
	$(".slideshow div").hide();
	$('.slideshow').fadeIn("fast"); 
		

	var active = $(".active");

	console.log("active is ", active);
	if( active.next() ) {
		console.log("There's a next active! It is ", active.next());
		active.removeClass("active");
		active.next().addClass("active");
		active.delay(3000).fadeOut(1000);
		active.next().fadeIn("slow");
	} else {
		console.log("No next active! Going back to... ", active.first() );
		active.removeClass("active");
		active.first().addClass("active");
		active.fadeOut("slow");
		active.first().fadeIn("slow");
	}


})