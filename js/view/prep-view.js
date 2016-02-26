var PrepView = function (container, model) {
      this.updateDisplay = function() {
		if (model.getDish(model.menu['starter']) === undefined || model.getDish(model.menu['main dish']) === undefined || model.getDish(model.menu['dessert']) === undefined)  {
			return;
		}
		
		else{	
            var starter = model.getDish(model.menu['starter']);
            var main = model.getDish(model.menu['main dish']);
            var dessert = model.getDish(model.menu['dessert']);
		
			var len = starter.ingredients.length;
			
			$(".main2view2").html('');
            $(".main2view2").append('<div class="col-xs-12 main2prepdish"><div class="row dish-specific-row"><div class="col-xs-2 dinner-preparation-dish-picture"><img src="./images/' + starter.image + '"></div><div class="col-xs-5 dinner-preparation-dish-description"></div><div class="col-xs-5 dinner-preparation-dish-preparation"><p>' + starter.description + '</p></div></div></div>' 
                  );
				  
			for(i = 0; i < len; i++){
				var ingredients = starter.ingredients[i];
				$(".dinner-preparation-dish-description").append('<div class="ingr"><b>' + ingredients.quantity+' '+ ingredients.unit+'</b> '+ingredients.name+ ' -- '+ ingredients.price + ' SEK<br></div>');
			};
			
            $(".main2view2").append('<div class="col-xs-12 main2prepdish"><div class="row dish-specific-row"><div class="col-xs-2 dinner-preparation-dish-picture"><img src="./images/' + main.image + '"></div><div class="col-xs-5 dinner-preparation-dish-description"></div><div class="col-xs-5 dinner-preparation-dish-preparation"><p>' + main.description + '</p></div></div></div>' 
                  );

			for(i = 0; i < len; i++){
				var ingredients = main.ingredients[i];
				$(".dinner-preparation-dish-description").append('<div class="ingr"><b>' + ingredients.quantity+' '+ ingredients.unit+'</b> '+ingredients.name+ ' -- '+ ingredients.price + ' SEK<br></div>');
			};
			
            $(".main2view2").append('<div class="col-xs-12 main2prepdish"><div class="row dish-specific-row"><div class="col-xs-2 dinner-preparation-dish-picture"><img src="./images/' + dessert.image + '"></div><div class="col-xs-5 dinner-preparation-dish-description"></div><div class="col-xs-5 dinner-preparation-dish-preparation"><p>' + dessert.description + '</p></div></div></div>' 
                  );
				  

			for(i = 0; i < len; i++){
				var ingredients = dessert.ingredients[i];
				$(".dinner-preparation-dish-description").append('<div class="ingr"><b>' + ingredients.quantity+' '+ ingredients.unit+'</b> '+ingredients.name+ ' -- '+ ingredients.price + ' SEK<br></div>');
			};	  			
		}	  
    };
};