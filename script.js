$(document).ready(function() {
// your javascript and jQuery code goes below
$("#pink").click(function(){

	console.log("I've been clicked!");
	$("#pink").css("border", "20px solid pink");




});
$("#blue").click(function() {

	console.log("Fealing blue")
	$("#container").css("background-color", "blue")
})
$("#fade-away").click(function(){
	console.log("fade away")
	$("#container").fadeOut(2500);
})
$("#lottery").click(function(){
	// console.log("you just won the lottery")
	alert("you just won the lotter")
})
$("#confirm").click(function() {
	confirm("Press a button!");
})
$("#puppy").click(function() {
	console.log("puppy")
	$("#container").css("background-image", "url('images/puppy.jpg')");
})
})