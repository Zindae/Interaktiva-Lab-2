var SideView = function (container, model) {
	this.updateDisplay = function() {
		var id;
		this.dishDiv = container.find('.sideview-dish');
		this.dishDiv.html('');
		
		var price = 0;
		var guests = model.getNumberOfGuests();
		for (i in model.menu) {
			id = model.menu;
			this.dishDiv.append('<div class="col-xs-8 dishname">' +model.menu[i].Title+'</div><div class="col-xs-4 dishcost"></div>');
			$(".sideview-display-total-cost").html(guests*price+' SEK');
		}
	};
};