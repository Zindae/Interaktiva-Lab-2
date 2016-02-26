var SideView = function (container, model) {
	this.updateDisplay = function() {
		var id;
		this.dishDiv = container.find('.sideview-dish');
		this.dishDiv.html('');
		
		var price = 0;
		var guests = model.getNumberOfGuests();
		console.log(guests);
		for (var key in model.menu) {
			if (model.menu[key] !== undefined) {
				id = model.menu[key];
				price = price + model.getDishPrice(id);
				//console.log(price);
				this.dishDiv.append('<div class="col-xs-8 dishname">' +model.getDish(id).name +'</div><div class="col-xs-4 dishcost">' + model.getDishPrice(id) + '</div>');
				$(".sideview-display-total-cost").html(guests*price+' SEK');
			}
		}
	};
};