


$(document).ready(function(){
	var chosenAnswer = 0;
	$('#option1').click(function(){
		chosenAnswer = 1;
		alert(1);
	});

	$('#option2').click(function(){
		chosenAnswer = 2;
		alert(2);
	});

	$('#option3').click(function(){
		chosenAnswer = 3;
		alert(3);
	});
	$('#option4').click(function(){
		chosenAnswer = 4;
		alert(4);
	});

	$('.next').click(function(){
		
		alert('you clicked next');
	});

});

	/*
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
	
});*/

