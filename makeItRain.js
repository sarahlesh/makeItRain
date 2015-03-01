$.fn.makeItRain = function(){

	$(this).on('click',function(){

		var maxBills = 100;


		for (var i = 0; i < maxBills; i++){

		var randomNumber = Math.floor(Math.random()*1500);
		var randomPosition = Math.floor(Math.random()*100) + 25;
		var randomTime = Math.random() * 20;
		var randomSpeed = (Math.random()*20)+10 ;



		var bills = $("<span class='billsBillsBills'>")
			.css({
				left : randomNumber,
				top: '-150px',
				"-webkit-animation-delay" : randomTime + "s",
				"-webkit-animation-duration" : randomSpeed + "s"
			});

			$(bills).prepend('<img src="images/fullbill.svg" alt="a dollar bill">');


			$('body').append(bills);

		}; // end click function

	}); //end for loop

}; //end make it rain fn.

// thanks to Anisha Varghese from the Noun Project for the SVG!!