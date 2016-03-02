var SideView = function (container, model) {
	this.updateDisplay = function() {
		var id;
		var totalDinnerPrice = 0;
		this.dishDiv = container.find('.sideview-dish');
		this.dishDiv.html('');
		
		var price = 0;
		var guests = model.getNumberOfGuests();
		for (i in model.menu) {
			dish = model.menu[i];
			this.dishDiv.append('<div class="col-xs-8 dishname">' +dish.Title+'</div><div class="col-xs-4 dishcost">'+model.getDishPrice(dish, guests)+'</div>');
			// $(".sideview-display-total-cost").html(guests*price+' SEK');

			totalDinnerPrice += model.getDishPrice(dish, guests);
		}


		$(".sideview-display-total-cost").html(totalDinnerPrice+' SEK');
	};
};
/*

var tot = 0;

for i in ingredeients
	
	guests*ingredients.MetricDisplayQuantity	
	
	tot += guests*ingr[i].MetricDisplayQuantity;	

*/


// 