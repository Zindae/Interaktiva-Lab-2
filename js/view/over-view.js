var OverView = function (container, model) {
      this.updateDisplay = function() {
		//if (model.getDish(model.menu['starter']) !== undefined && model.getDish(model.menu['main dish']) !== undefined && model.getDish(model.menu['dessert']) !== undefined)  {
			
            var starter = model.getDish(model.menu['starter']);
            //console.log(starter);
            var main = model.getDish(model.menu['main dish']);
            var dessert = model.getDish(model.menu['dessert']);
                  // var theDiv = $.this;
                  // $.each(model.menu, function(key, val) {
            $(".middle").append('<div class=" col-xs-2 "><img class="icon" src="./images/' + starter.image + '"></div>');
            $(".middle").append('<div class=" col-xs-2 "><img class="icon" src="./images/' + main.image + '"></div>');
            $(".middle").append('<div class=" col-xs-2 "><img class="icon" src="./images/' + dessert.image + '"></div>');
            
            var total = model.getTotalMenuPrice(model.menu)
            $(".right").append('Totalt pris för meny = ' +total+ 'SEK'); 
			//}
      }  
};