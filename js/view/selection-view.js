var SelectionView = function (container, model, x) {
	this.updateDisplay = function() {
		var allRecipes;
		//$('.loading').hide();
		$(".main1view1").html('');

		// On ENTER
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
		//console.log('SELECT');


				
		if (temp === undefined) {
			return;
		}
		else {
			// console.log('temp', temp);
			var len = temp.length;
			// console.log(len);
			$(".main1view1").html('');
		  // Iterates through every recipe in dinnerModel.js
			for (i = 0; i < len; i++) {
				
				// Gets specific recipe
				var outputDish = temp[i];
				
				//if (outputDish.name.search(myExp) != -1) {
					
				//Creates DIV with recipe info.

					$(".main1view1").append('<div class="col-xs-2 main1view1dishes" id="'+outputDish.RecipeID+'" ><img class="icon" src="'+outputDish.ImageURL120+'"><p>'+outputDish.Title+'</p></div>');
			 };
			

			} 
		
		// Click function here to update the event handler when model.update() occurs.





	};
};
