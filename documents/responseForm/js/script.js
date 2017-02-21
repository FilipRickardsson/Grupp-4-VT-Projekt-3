$(document).ready(function(){
	//test();
	//toDo();

	$("#move_up").click( function() {

		$("#img").toggle();
		
	});//end move_up
	
	$("#move_down").click( function() { 
		$("#img").fadeIn(1000);
		$('#img').slideToggle('slow');
	});//end move_down $("#color").click( function() {




});

	/*	
function test(){
	$('button').click( function(){
		$('img').hide('slow');
		$('img #a').slideUp();
	});
}
function toDo(){
	//$("p").html("Change the page.");

$("#move_down").click( function() { 
		$("#change_me").animate({top:500},2000);
	});//end move_down $("#color").click( function() {
		$("#change_me").css("color", "red"); 
	});//end color
	$("#disappear").click( function() { 
		$("#change_me").toggle("slow");
	});//end disappear });//end doc ready




*/	
