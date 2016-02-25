var SideView = function (container, model) {
	this.updateDisplay = function() {
		var id;
		this.dishDiv = container.find('.sideview-dish');
		this.dishDiv.html('');
		for (var key in model.menu) {
			if (model.menu[key] !== undefined) {
				id = model.menu[key];
				// console.log(id);
				// console.log(model.getDish(id));
				this.dishDiv.append('' +model.getDish(id).name +', ' + model.getDishPrice(id) + ' SEK<br>');
			}
		}
	};
};