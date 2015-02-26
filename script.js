$(function(){
	var maxBills = 100;

	// var randomNumber = Math.floor(Math.random()*1500);

	for (var i = 0; i < maxBills; i++){

	var randomNumber = Math.floor(Math.random()*1500);
	
	var bills = $("<span>")
		.addClass('billsBillsBills')
		.text("$")
		.css({
			left : randomNumber
		});

	$('body').append(bills);
	}
});