var Controller = function(model){

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
		var oneDish = model.getDish(dishID);
		model.menu[ oneDish.type ] = oneDish.id;
		model.update();
	})
	
	// go to prepView
	$('#print-recipe').click(function() {
		model.update();
	});

	
	// search filter
	$('#search').keyup(function() {
		var searchField = $('#search').val();
		var myExp = new RegExp(searchField, "i");
		model.setSearchDish(myExp);
		model.update();
	});
};