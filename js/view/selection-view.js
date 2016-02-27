var SelectionView = function (container, model) {
	this.updateDisplay = function() {
		var allRecipes;
		
		$(".main1view1").html('');
		
		var myExp = model.getSearchDish();
		var filter = model.getFilterType();

		// Check filter
		// if (filter == 'all dishes'){
			// allRecipes = model.getAll();
		// }
		
		// else {
			// allRecipes = model.getAllDishes(filter);
		// }
		
      // Length of the array for the FOR loop
		var grocery = model.getGrocery();
		var len = grocery.length;
		// model.getRecipeJson();
		// var x = model.getR();
		
      // Iterates through every recipe in dinnerModel.js
		for (i = 0; i < len; i++) {
            
            // Gets specific recipe
            var outputDish = grocery[i];
			//console.log(allRecipes[i]);
			//console.log('ID', outputDish.RecipeID);
			
			
			// if (outputDish.name.search(myExp) != -1) {
				
            //Creates DIV with recipe info.

				$(".main1view1").append('<div class="col-xs-2 main1view1dishes" id="'+outputDish.RecipeID+'" ><img class="icon" src="'+outputDish.ImageURL+'"><p>'+outputDish.Title+'</p></div>');
			// }
		 };
		 
		
		// Click function here to update the event listener when model.update() occurs.
		
		$('.main1view1dishes').click(function(){
			
			var dishID = $(this).attr('id');		
			model.setDishID(dishID);
			model.getDish(dishID);
			$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2, .main1search').css('display', ''); 
			$('.main1').show(); 
			$('.start-page, .main1view1, .main2, .main1search').hide();
			model.update();
		});

		};
};
