


$(document).ready(function(){
	$('.next').click(function(){
alert('det här funkar');
	})
	
	$('.next').click(function(){
		alert('you clicked next '  );
		
		switch(){
			case 1 : 
			alert('you clicked option number '  );
			break;
			case 2 : 
			break;
			case 3 : 
			break;
			case 4 : 
			break;
			default:
			 alert('you must choose one option!');
			break;
			
		}
	})
	
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
