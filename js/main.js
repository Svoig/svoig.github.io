$(document).ready(function() {
	console.log("In document.ready");
	window.scroll(0,100);
	console.log("Tried to scoll!");

	/*$(".nav-bar").blurr({
		height: 50,
		sharpness: 40,
		offsetX: 0,
		offsetY: 0,
		callback: null
	});
	console.log("Should have blurred .nav");

	$(".contact").blurr({
		height: 50,
		sharpness: 40,
		offsetX: 0,
		offsetY: 0
	});
	console.log("Should have blurred .contact");*/
	$("#clone").append($("#content").innerHTML);
	$("#clone").scrollTop($(this).scrollTop());
	console.log("Finished the JS!");
});