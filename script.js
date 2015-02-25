$(function() {
	
	var maxBills = 100; //max amount of bills per page
	
	// var billsArray = [];

	//generate random number

	for (var i = 0; i < maxBills ; i ++){

		var randomNumber = Math.floor(Math.random()*1500);
		console.log(randomNumber)

		var bills = "<span class='billsBillsBills' style = 'left:" + randomNumber +"px' >$</span>";
		$('body').append(bills);//append spans to page


		// $("span.billsBillsBills")
		}




});

		//make all arrays display randomly ontop of page


		// $('span').addClass("billsBillsBills"*randomNumber);

	// create an div and add to page








