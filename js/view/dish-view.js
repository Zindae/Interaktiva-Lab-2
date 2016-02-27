var DishView = function (container, model) {
      this.updateDisplay = function() {
		
			if (model.getDishID() === undefined) {
				return;
				}
				
			else {
				var id = model.getDishID();
				var oneRecipe = model.getGrocery();
				//var ingredients = oneRecipe.Category;
				//var len = oneRecipe.ingredients.length;
				var grocery = model.getGrocery();
				//var oneRecipe = model.getAll();
				console.log('alla ingredienser:', grocery);
				var ingredientsVar = model.getNumberOfGuests();
				var courseVar = model.getAll();
				
				$(".number-of-people-in-main1view2").html(ingredientsVar);
				var len = grocery.length;
				// COL 1
				$(".main1view2dishname > div").html('<div class=" col-xs-6  main1-view2-dish" id="' + id + '"><h2>' + courseVar.Name + '</h2><img class="icon" src="' + courseVar.ImageURL120 + '"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p></div>');

				// COL 2
				$(".main1view2ingredients > .row-for-display-ingredients").html(function() {
					  $(".main1view2ingredients > .row-for-display-ingredients").html('');
					  for(i = 0; i < len; i++){
							var ingredients = grocery[i];
							
							$(".main1view2ingredients > .row-for-display-ingredients").append('<div class=" col-xs-12  main1-view2-ingr "><b>' + ingredientsVar*ingredients.MetricQuantity+' '+ ingredients.MetricUnit+'</b> '+ingredients.Name+ ' -- '+ ingredientsVar + ' SEK</div><br>');
					  };
				});
				
				// COL 3
				$(".main1view2preparation > div").html('<div class=" col-xs-6  main1-view2-prep "><h3>Preparation</h3><h4>' + oneRecipe.description + '</h4></div>');
			}
      };
};