var OverView = function (container, model) {
      this.updateDisplay = function() {
		if (model.getDish(model.menu['starter']) === undefined || model.getDish(model.menu['main dish']) === undefined || model.getDish(model.menu['dessert']) === undefined) {
			return;
		}
		else{
			
            var starter = model.getDish(model.menu['starter']);
            var main = model.getDish(model.menu['main dish']);
            var dessert = model.getDish(model.menu['dessert']);

			$(".middle").html('');
            $(".middle").append('<div class=" col-xs-2 "><img class="icon" src="./images/' + starter.image + '"></div>');
            $(".middle").append('<div class=" col-xs-2 "><img class="icon" src="./images/' + main.image + '"></div>');
            $(".middle").append('<div class=" col-xs-2 "><img class="icon" src="./images/' + dessert.image + '"></div>');
            
            var total = model.getTotalMenuPrice(model.menu)
			$(".right").html('');
            $(".right").append('Totalt pris för meny = ' +total+ 'SEK'); 
			
			// confirm dinner to update event handler.
				
			$('#confirm-dinner').click(function() {
				model.update();
			});
	
			};
      };  
};