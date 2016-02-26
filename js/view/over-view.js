var OverView = function (container, model) {
      this.updateDisplay = function() {
		if (model.getDish(model.menu['starter']) === undefined || model.getDish(model.menu['main dish']) === undefined || model.getDish(model.menu['dessert']) === undefined) {
			return;
		}
		else{
			
			var guests = model.getNumberOfGuests();
            var starter = model.getDish(model.menu['starter']);
            var main = model.getDish(model.menu['main dish']);
            var dessert = model.getDish(model.menu['dessert']);
			
			var starterPrice = guests*model.getDishPrice(model.menu['starter']);
			var mainPrice = guests*model.getDishPrice(model.menu['main dish']);
			var dessertPrice = guests*model.getDishPrice(model.menu['dessert']);
			
			$(".main2-number-of-ppl").html(guests);

			$(".middle").html('');
            $(".middle").append('<div class=" col-xs-2 "><img class="icon" src="./images/' + starter.image + '"><br><br>'+ starter.name+'<br>'+starterPrice+' SEK</div>');
            $(".middle").append('<div class=" col-xs-2 "><img class="icon" src="./images/' + main.image + '"><br><br>'+ main.name+'<br>'+mainPrice+' SEK</div>');
            $(".middle").append('<div class=" col-xs-2 "><img class="icon" src="./images/' + dessert.image +'"><br><br>'+ dessert.name+'<br>'+dessertPrice+' SEK</div>');
            
            var total = model.getTotalMenuPrice(model.menu)
			$(".right").html('');
            $(".right").append('<p class="tot">Totalt pris för meny med '+guests+' gäst(er) blir = ' +guests*total+ 'SEK</p>'); 
			
			// confirm dinner to update event handler.
				
			$('#confirm-dinner').click(function() {
				model.update();
			});
	
			};
      };  
};