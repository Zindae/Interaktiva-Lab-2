$(document).ready(function(){        
		
	
	// MODEL
	var model = new DinnerModel();
	
	
	// CONTROLLERS
	var controller = new Controller(model);
	
	
	// VIEW
	var sideView 		= new SideView( $('.main1-sideview'), model );
	var selectionView 	= new SelectionView( $('.main1view1'), model );
	var dishView 		= new DishView( $('.main1view2'), model );
	var overView 		= new OverView( $('.main2view1'), model );
	var prepView 		= new PrepView( $('main2view2'), model );

	// MAKE OBSERVER
	model.subscribe(sideView.updateDisplay);
	model.subscribe(selectionView.updateDisplay);
	model.subscribe(dishView.updateDisplay);
	model.subscribe(overView.updateDisplay);
	model.subscribe(prepView.updateDisplay);
	
});