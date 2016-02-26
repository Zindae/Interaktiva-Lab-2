$(document).ready(function(){        
		
	var model = new DinnerModel();
	
	var sideView 		= new SideView( $('.main1-sideview'), model );
//	NOT USED
//	var searchView 		= new SearchView( $('.main1search') );
	var selectionView 	= new SelectionView( $('.main1view1'), model );
	var dishView 		= new DishView( $('.main1view2'), model );
	var overView 		= new OverView( $('.main2view1'), model );
	var prepView 		= new PrepView( $('main2view2'), model );

	model.subscribe(sideView.updateDisplay);
	// NOT USED
	// model.subscribe(searchView.updateDisplay);
	model.subscribe(selectionView.updateDisplay);
	model.subscribe(dishView.updateDisplay);
	model.subscribe(overView.updateDisplay);
	model.subscribe(prepView.updateDisplay);
	
	// start app
	$('#create-dinner').click(function(){
		$('#body').css('background-color','white');
		model.update();
		// for (i in model.subscribers) {
			// console.log(model.subscribers[i]);
		// };
	});

	// set number of people
	$('#number-of-people').change(function() {
		model.setNumberOfGuests(this.value);
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

});
	
	// search filter
	// $('#search').keyup(function() {
		// var allRecipes = model.getAll();
		// var searchField = $('#search').val();
		// var myExp = new RegExp(searchField, "i");
			// // var output = '<ul class="searchresults">';
			// $.each(allRecipes, function(key, val) {
				// if (val.name.search(myExp) != -1){
					// console.log(val);

					// // output += '<li>';
					// // output += '<h2>'+ val.name +'</h2>';
					// // output += '<img src="images/'+ val.shortname +'_tn.jpg" alt="'+ val.name +'" />';
					// // output += '<p>'+ val.bio +'</p>';
					// // output += '</li>';
				// }
			// });
			// // output += '</ul>';
		
	// });


