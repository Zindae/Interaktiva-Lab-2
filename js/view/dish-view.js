var DishView = function (container, model, x) {
      this.updateDisplay = function() {

		var oneRecipe;

		$('.main1view1dishes').click(function(){
			
			var dishID = $(this).attr('id');		
			model.setDishID(dishID);
			var id = model.getDishID();
			model.fetchRecipe(dishID);
			$('.start-page, .main1, .main2, .main1view1, .main1view2, .main2view1, .main2view2, .main1search').css('display', ''); 
			$('.main1').show(); 
			$('.start-page, .main1view1, .main2, .main1search').hide();
			model.update();

		});
		
			if (model.getDishID() === undefined) {
				console.log('undefined');
				return;
				}
				
			else {				
				var oneRecipe = model.singleRecipe[0];
				var ingr = oneRecipe["Ingredients"];
				var len = ingr.length;
				var ingredientsVar = model.getNumberOfGuests();
				var id = model.getDishID();
				
				$(".number-of-people-in-main1view2").html(ingredientsVar);

				// COL 1
				$(".main1view2dishname > div").html('<div class="col-xs-12 main1-view2-dish" id="' + id + '"><h2>' + oneRecipe.Title + '</h2><img class="icon" src="' + oneRecipe.HeroPhotoUrl + '" width = 400px><p>'+ oneRecipe.Description +'</p></div>');

				// COL 2
				$(".main1view2ingredients > .row-for-display-ingredients").html(function() {
					  $(".main1view2ingredients > .row-for-display-ingredients").html('');
					  for(i = 0; i < len; i++){
							var ingredients = ingr[i];
							//console.log('wtf', ingredients.Quantity);
							
							$(".main1view2ingredients > .row-for-display-ingredients").append('<div class=" col-xs-12  main1-view2-ingr "><b>' + ingredientsVar*ingredients.Quantity+' '+ ingredients.MetricUnit+'</b> '+ingredients.Name+ ' -- '+ ingredientsVar*ingredients.MetricDisplayQuantity + ' SEK</div><br>');
					  };
				});
				
				// COL 3
				$(".main1view2preparation").html('<h3>Preparation</h3><h5>' + oneRecipe.Instructions + '</h5></div>');
			}
      };
};