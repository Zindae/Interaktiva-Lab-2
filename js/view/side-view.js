var SideView = function (container, model) {
	this.updateDisplay = function(id) {
				// HOW TO ITERATE OBECT IN JAVASCRIPT
		// for (var key in model.menu) {
		// 	console.log(key, model.menu[key]);
		// }
		var id;
		this.dishDiv = container.find('.sideview-dish');
		this.dishDiv.html('');

		for (var key in model.menu) {
			id = model.menu[key];
			// console.log(id);
			// console.log(model.getDish(id));
			this.dishDiv.append( model.getDish(id).name +', ' + model.getDishPrice(id) + ' SEK<br>');
		}


		// var starter = model.getDish(model.menu['starter']);
  //       var main = model.getDish(model.menu['main dish']);
  //       var dessert = model.getDish(model.menu['dessert']);





		// var dish = model.getDish(id);
		// var dishPrice = model.getDishPrice(id);
		// $(".dish-name").append(''+ dish.name+', ' + dishPrice + ' SEK<br>')
	};
};