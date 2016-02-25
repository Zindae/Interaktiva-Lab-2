$(document).ready(function(){        
		
	var model = new DinnerModel();
	
	var sideView 		= new SideView( $('.main1-sideview'), model );
	var searchView 		= new SearchView( $('.main1search') );
	var selectionView = new SelectionView( $('.main1view1'), model );
	var dishView 		= new DishView( $('.main1view2'), model );
	var overView 		= new OverView( $('.main2view1'), model );
	var prepView 		= new PrepView( $('main2view2'), model );

	//model.subscribe(sideView.updateDisplay);
	//model.subscribe(dishView.updateDisplay);
	
	// start app
	$('#create-dinner').click(function(){
		$('#body').css('background-color','white');
		//selectionView.updateDisplay();
	});

	// clicking a dish in selectionView
	$('.main1view1dishes').click(function(){
		
		// var dishID = $(this).attr('id');
		// id passed to dishView
		dishView.updateDisplay( $(this).attr('id') );
		$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2').css('display', ''); 
		$('.main1').show(); 
 		$('.start-page, .main1view1, .main2').hide();

	});


	// set number of people
	$('#number-of-people').change(function() {
		model.setNumberOfGuests(this.value);
	});
	


	// confirm dinner
	$('#confirm-dinner').click(function() {
		overView.updateDisplay();
	});
	
	// search filter
	$('#search').keyup(function() {
		var allRecipes = model.getAll();
		var searchField = $('#search').val();
		var myExp = new RegExp(searchField, "i");
			// var output = '<ul class="searchresults">';
			$.each(allRecipes, function(key, val) {
				if (val.name.search(myExp) != -1){
					console.log(val);

					// output += '<li>';
					// output += '<h2>'+ val.name +'</h2>';
					// output += '<img src="images/'+ val.shortname +'_tn.jpg" alt="'+ val.name +'" />';
					// output += '<p>'+ val.bio +'</p>';
					// output += '</li>';
				}
			});
			// output += '</ul>';
		
	});

	// confirm dish
	$('#confirm-dish').click(function(){
		var dishID = $('.main1-view2-dish').attr('id');
		var oneDish = model.getDish(dishID);
		model.menu[ oneDish.type ] = oneDish.id;
		sideView.updateDisplay();
		//model.publish();
	})
	
	// go to prepView
	$('#print-recipe').click(function() {
		prepView.updateDisplay();
	});

});




