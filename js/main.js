var cycling;
var stop;

function cycle() {
	var active = $(".active");
	cycling = true;

	if( stop !== true ) {
		$("#title").fadeOut(500);
		$('.slideshow').fadeIn(2000); 
		$(".active").fadeIn(2000);
		
	};

	$("#jumbotron").click(function() {
		console.log("jumbotron got clicked. Stop cycling!");
		cycling = false;
		stop = true;
	});



if( stop === true ) {
	$(".ss").fadeOut(300);
	$("#title").fadeIn(300);
	cycling = false;
	return;
}
	console.log("Starting the cycle!")
	console.log("active is ", active);
	if( active.next().length ) {
		console.log("There's a next active! It is ", active.next());
		active.removeClass("active");
		active.next().addClass("active");
		active.delay(3000).fadeOut(2000);
		active.next().fadeIn(2000);
	} else {
		console.log("No next active! Going back to... ", active.parent().siblings(':first') );
		var first = $(".ss").first();
		active.removeClass("active");
		first.addClass("active");
		active.fadeOut(2000);
		first.fadeIn(2000);
	}
	if (stop !== true) {

	setTimeout(cycle, 5000);

	} else return;
}


function animRotate(elem, start, angle) {
	$({deg:start}).animate({deg: angle}, {
		duration: 500,
		step: function(current) {
			elem.css({
				transform: 'rotate(' + current + 'deg)'
			});
		}
	});
}

function toggleHeader() {

	console.log("top-arrow clicked!");

	if( !( $("#top-arrow").hasClass("revealed") ) ) {
		console.log("Hasn't been revealed! Revealing!");
		$("#top-arrow").addClass("revealed");
		$("#header").animate({
			top: "+=50"
		}, 500);

		animRotate($("#top-arrow"), 0, 180);
		
	} else {
		console.log("Already revealed. Hiding!");
		$("#top-arrow").removeClass("revealed");
		$("#header").animate({
			top: "-=50"
		}, 500);

		animRotate($("#top-arrow"), 180 , 0);

	}
};

function toggleFooter() {

	console.log("bottom-arrow clicked!");

	if( !( $("#bottom-arrow").hasClass("revealed") ) ) {
		console.log("Hasn't been revealed! Revealing!");
		$("#bottom-arrow").addClass("revealed");
		$("#footer").animate({
			bottom: "+=50"
		}, 500);

		animRotate($("#bottom-arrow"), 0, 180);
		
	} else {
		console.log("Already revealed. Hiding!");
		$("#bottom-arrow").removeClass("revealed");
		$("#footer").animate({
			bottom: "-=50"
		}, 500);

		animRotate($("#bottom-arrow"), 180 , 0);

	}
};

$(document).ready(function() {


	console.log("In the JS file");
	$(".slideshow div").hide();
	$(".ss").hide();
	

	$("#portfolio").click(function() {
		if (cycling !== true) {
			console.log("No cycling here!");
			stop = false;
			$("#title").fadeOut(500);
			cycle();
		} else {
			console.log("You're cycling! Stop it!");
			$(".ss h1").fadeOut(300);
			$(".si").fadeOut(300);
			$(".ss").fadeOut(300);
			$(".slideshow").fadeOut(300);
			stop = true;
			cycling = false;
			$("#title").fadeIn(300);
		}
	});

	
	$("#top-arrow").click(toggleHeader);

	$("#bottom-arrow").click(toggleFooter);

	$("#about").click(function() {
		$("#work").hide();
		$(".ss").hide();
		if($("#title").hasClass("hidden")) {
			$("#title").fadeIn(500);
			$("#title").removeClass("hidden");
			$("#me").fadeOut(500);
			$("#me").addClass("hidden");
		} else {

		$("#title").fadeOut(500);
		$("#title").addClass("hidden");
		$("#me").removeClass("hidden");
		$("#me").fadeIn(500);
		}
	});

	$("#my-work").click(function() {
		$("#me").hide();
		$(".ss").hide();
		if($("#title").hasClass("hidden")) {
			$("#title").fadeIn(500);
			$("#title").removeClass("hidden");
			$("#work").fadeOut(500);
			$("#work").addClass("hidden");
		} else {

		$("#title").fadeOut(500);
		$("#title").addClass("hidden");
		$("#work").removeClass("hidden");
		$("#work").fadeIn(500);
		}
	});


})