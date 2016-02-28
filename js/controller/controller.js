var Controller = function(model){
	
	$( ".loading" ).hide();
	
	$( document ).ajaxStart(function() {
		$('.loading').css('display', ''); 
		$( ".loading" ).show();
	});
	
	$( document ).ajaxStop(function() {
		$('.loading').css('display', ''); 
		$( ".loading" ).hide();
	});

	$('.submit').click (function() {
		// $('.form-control').submit()
		console.log('hej');
	});
	
	// start app
	$('#create-dinner').click(function(){
		$('#body').css('background-color','white');
		$('#page-header').css('background-color','rgba(204, 204, 204, 1)');
		model.update();
	});
	
	
	// input-people form
	$('#number-of-people').change(function() {
		model.setNumberOfGuests(this.value);
		model.update();
	});
	
	// filter form
	$('#form-control').change(function() {
		model.setFilterType(this.value.toLowerCase());
		model.update();
	});

	// confirm dish
	$('#confirm-dish').click(function(){
		var dishID = $('.main1-view2-dish').attr('id');
		console.log(dishID);
		var oneDish = model.singleRecipe[0];
		model.menu.push(oneDish);
		console.log(model.menu);
		model.update();

	})
	
	// go to prepView
	$('#print-recipe').click(function() {
		model.update();
	});


	// search filter
	// $('#search').keyup(function() {
		// var searchField = $('#search').val();
		// var myExp = new RegExp(searchField, "i");
		// model.setSearchDish(myExp);
		// model.update();
	// });
	

};