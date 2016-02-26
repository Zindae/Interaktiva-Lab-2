var SelectionView = function (container, model) {
	this.updateDisplay = function() {
		var allRecipes;
		
		$(".main1view1").html('');
		
		var myExp = model.getSearchDish();
		var filter = model.getFilterType();

		// Check filter
		if (filter == 'all dishes'){
			allRecipes = model.getAll();
		}
		
		else {
			allRecipes = model.getAllDishes(filter);
		}
		
      // Length of the array for the FOR loop
		var len = allRecipes.length;
		
      // Iterates through every recipe in dinnerModel.js
		for (i = 0; i < len; i++) {
            
            // Gets specific recipe
            var outputDish = allRecipes[i];
			
			
			if (outputDish.name.search(myExp) != -1) {
				
            //Creates DIV with recipe info.

				$(".main1view1").append('<div class="col-xs-2 main1view1dishes" id="'+outputDish.id+'" ><img class="icon" src="./images/'+outputDish.image+'"><p>'+outputDish.name+'</p></div>');
			}
		 };
		 
		
		// Click function here to update the event handler when model.update() occurs.
		
		$('.main1view1dishes').click(function(){
			
			var dishID = $(this).attr('id');		
			model.setDishID(dishID);			
			$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2, .main1search').css('display', ''); 
			$('.main1').show(); 
			$('.start-page, .main1view1, .main2, .main1search').hide();
			model.update();
		});

		};
};
