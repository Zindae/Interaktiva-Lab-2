var SideView = function (container, model) {
	this.updateDisplay = function() {
		var id;
		this.dishDiv = container.find('.sideview-dish');
		this.dishDiv.html('');
		
		var price = 0;
		var guests = model.getNumberOfGuests();
		//console.log(guests);
		for (i in model.menu) {
			id = model.menu;
			//price = price + model.getDishPrice(id);
			this.dishDiv.append('<div class="col-xs-8 dishname">' +model.menu[i].Title+'</div><div class="col-xs-4 dishcost"></div>');
			$(".sideview-display-total-cost").html(guests*price+' SEK');
		}
	};
};

// + model.getDishPrice(id) + 