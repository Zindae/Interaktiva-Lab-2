var PrepView = function (container, model, x) {
      this.updateDisplay = function() {
		  
			var guests = model.getNumberOfGuests();
			$(".main2view2").html('');

			for (i in model.menu) {
				course = model.menu[i];
				var ingredients = model.menu[i];
				
				var ingr = course["Ingredients"];
				var len = ingr.length;
				var guests = model.getNumberOfGuests();
				var id = model.getDishID();
				var ingredients;



				// dynamic html insertion variables

				var html_Insert_DishImage = '<img src="' + course.ImageURL+ '">';
				var html_Insert_DishIngredients = '';

				for(k = 0; k < len; k++){
					ingredients = ingr[k];
					// console.log("INGREDIENTS",ingredients);
					
					html_Insert_DishIngredients += '<div class=" col-xs-12  main1-view2-ingr "><b>' + guests*ingredients.Quantity+' '+ ingredients.MetricUnit+'</b> '+ingredients.Name+ ' -- '+ guests*ingredients.MetricDisplayQuantity + ' SEK</div><br>';
				};



				var html_Insert_DishInstructions = '<p>' + course.Instructions + '</p>';



				// row for each dish
				$(".main2view2").append('<div class="col-xs-12 main2prepdish"> <div class="row dish-specific-row"> <div class="col-xs-2 dinner-preparation-dish-picture">'+html_Insert_DishImage+'</div> <div class="col-xs-5 dinner-preparation-dish-ingredients">'+html_Insert_DishIngredients+'</div> <div class="col-xs-5 dinner-preparation-dish-preparation">'+html_Insert_DishInstructions+'</div> </div> </div>' 
                  ); 
				


				// $(".dinner-preparation-dish-picture ").append('<img src="' + course.ImageURL+ '">');
				// for(k = 0; k < len; k++){
				// 	ingredients = ingr[k];
				// 	// console.log("INGREDIENTS",ingredients);
					
				// 	$(".dinner-preparation-dish-ingredients").append('<div class=" col-xs-12  main1-view2-ingr "><b>' + guests*ingredients.Quantity+' '+ ingredients.MetricUnit+'</b> '+ingredients.Name+ ' -- '+ guests*ingredients.MetricDisplayQuantity + ' SEK</div><br>');
					
				// };			
				// $(".dinner-preparation-dish-preparation").append('<p>' + course.Instructions + '</p>');

			};
			

    };
};