var SelectionView = function (container, model, x) {
	this.updateDisplay = function() {
		
		var allRecipes;

		$(".main1view1").html('<b><h2>Start by typing a search term!</h2></b>');

		// On ENTER button press search
		$('.form-control').keydown(function(event) {	
			if (event.keyCode == 13) {
				var searchField = $('#search').val();
				var myExp = new RegExp(searchField, "i");
				model.setSearchDish(myExp);
				model.getRecipe(searchField);
				//$('.loading').show();
				model.update();
			}
		});	
		
      // Length of the array for the FOR loop
		allRecipes = model.storeSearch;
		temp = allRecipes[0];
				
		if (temp === undefined) {
			return;
		}
		
		else {
			var len = temp.length;
			$(".main1view1").html('');
			for (i = 0; i < len; i++) {	
				var outputDish = temp[i];
					$(".main1view1").append('<div class="col-xs-2 main1view1dishes" id="'+outputDish.RecipeID+'" ><img class="icon" src="'+outputDish.ImageURL120+'"><p>'+outputDish.Title+'</p></div>');
			};
		} 
	};
};
