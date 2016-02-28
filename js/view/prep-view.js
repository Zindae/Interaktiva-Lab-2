var PrepView = function (container, model, x) {
      this.updateDisplay = function() {
		  
			var guests = model.getNumberOfGuests();
			$(".main2view2").html('');
			for (i in model.menu) {
				course = model.menu[i];
				$(".main2view2").append('<div class="col-xs-12 main2prepdish"><div class="row dish-specific-row"><div class="col-xs-2 dinner-preparation-dish-picture"><img src="' + course.ImageURL+ '"></div><div class="col-xs-5 dinner-preparation-dish-ingredients"></div><div class="col-xs-5 dinner-preparation-dish-preparation"><p>' + course.Instructions + '</p></div></div></div>' 
                  );
			};
			
			for(i in model.menu["Ingredients"]){
				var ingredients = model.menu[i];
				console.log(ingredients);
				$(".dinner-preparation-dish-ingredients").append('<div class="ingr"><b>' + guests*ingredients.quantity+' '+ ingredients.unit+'</b> '+ingredients.name+ ' -- '+ guests*ingredients.price + ' SEK<br></div>');
			};			
		// }	  
    };
};